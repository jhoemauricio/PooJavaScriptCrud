class Produto {

    constructor (){

        this.id = 1;
        //array de produtos 
        this.arrayProdutos = [];

        this.editId = null;
              
    }

    lerDados(){
       //variavel produto vazio
        let produto = {}

        produto.id = this.id;

        //propriedade de produto
        produto.nomeProduto = document.getElementById("produto").value;

        produto.valorProduto = document.getElementById("preco").value;

        return produto;

    }

    listaTabela(){
        
        let tbody = document.getElementById("tbody");
        //limpa os campos do tbody
        tbody.innerText = '';

        //percorre o array
        for(let i = 0;i< this.arrayProdutos.length; i++){

            // insere linha
            let tr = tbody.insertRow();
            //insere celula pra cada atributo
            let td_id = tr.insertCell();
            let td_produto= tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            //preenche a celula com a propriedade do array
            td_id.innerText = this.arrayProdutos[i].id;

            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].valorProduto;

            let del = document.createElement('img');
            del.style.width ="40px";
            del.style.height = "40px";
            del.src = 'deletar.png';
            del.setAttribute("onclick","produto.deletar("+this.arrayProdutos[i].id+")");


            let edit = document.createElement('img');
            edit.style.width ="40px";
            edit.style.height = "40px";
            edit.src = 'editar.png';
            edit.setAttribute("onclick","produto.preparaEditacao("+JSON.stringify(this.arrayProdutos[i])+")");
            
            td_acoes.appendChild(edit);
            td_acoes.appendChild(del);
            console.log(this.arrayProdutos);


        }
    }


    salvar(){

        //ler os dados do produto
        let produto = this.lerDados();
        //valida os campos
        this.validaCampos(produto);
            if(this.editId == null){
             this.adicionar(produto);

                }else{
                    this.atualizar(this.editId, produto);
                }

    
        //chama o metodo listaTabela
        this.listaTabela();
     
     
    }

    adicionar(produto){
            //atribui o produto e suas propriedades ao arrayProduto
            this.arrayProdutos.push(produto);
            //incrementa o Id
            this.id++;

    }

    atualizar(id,produto){
        
        for(let i=0; i  < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
                this.arrayProdutos[i].preco = produto.valorProduto;

            }

        }

    }

    validaCampos(produto){
        //valida campos
        if((produto.nomeProduto == '') || (produto.valorProduto == '')){
            alert('campos nao podem ser em branco');

        }
     
      
    }

    preparaEditacao(dados){

        this.editId = dados.id;
        document.getElementById("produto").value = dados.nomeProduto;
        document.getElementById("preco").value = dados.valorProduto; 


        document.getElementById("btn-1").innerText = "atualizar";
    }

    cancelar(){

        //limpa os campos
        document.getElementById("produto").value = '';
        document.getElementById("preco").value = '';

        document.getElementById("btn-1").innerText = 'salvar';
        this.editId = null;

    }

    deletar(id){

        for(let i = 0; i< this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){

                this.arrayProdutos.splice(i,1);

                tbody.deleteRow(i);



            }

            
        }

        


    }

 
}

//instancia novo objeto produto
var produto = new Produto();