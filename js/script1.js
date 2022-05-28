class Produto {

    constructor (){

        this.id = 1;
        //array de produtos 
        this.arrayProdutos = [];
              
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


        }
    }


    salvar(){

        //ler os dados do produto
        let produto = this.lerDados();
        //valida os campos
        this.validaCampos(produto);
        //atribui o produto e suas propriedades ao arrayProduto
        this.arrayProdutos.push(produto);
        //incrementa o Id
        this.id++;
        //chama o metodo listaTabela
        this.listaTabela();

        // console.log(produto);
    }

    validaCampos(produto){
        //valida campos
        if(produto.nomeProduto == ''){
            alert('informe o nome do produto');

        }
        if(produto.valorProduto == ''){
            alert('informe o preco do produto');

        }



    }

    cancelar(){

        //limpa os campos
        document.getElementById("produto").value = '';
        document.getElementById("preco").value = '';

    }

 
}

//instancia novo objeto produto
var produto = new Produto();