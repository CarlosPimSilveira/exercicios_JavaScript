// Ex 88 - Sistema de supermercado
let estoqueMercado = []

function cadastrarProduto(produto, preco, estoque) {
    if (preco >= 0 && estoque >= 0 && Number.isInteger(estoque)) {
        estoqueMercado.push({'Nome': produto, 'Preco': preco, 'Estoque':  estoque})
    } else {
        return console.log('Produto com informações invalidas')
    }
}

function listarProdutos() {
    if (!estoqueMercado.length) {
        return console.log('Estoque vazio!')
    } else {
        estoqueMercado.forEach((produto, index) => {
            console.log(index+1 + `. Nome: ` + produto.Nome + ` | Preço: ` + produto.Preco + ` | Estoque: ` + produto.Estoque)
        });
    }
}
//.toLowerCase()

function adicionarCarrinho(nomeProduto, qtd) {
    estoqueMercado.forEach((produto, index) => {
        index+1
        if (produto.Nome.toLowerCase() === nomeProduto.toLowerCase()) {
            if (produto.Estoque > 0 && qtd <= produto.Estoque) {
                produto.Estoque -= qtd
            }
        }
    })
}

// Cadastra produtos
cadastrarProduto('Arroz', 25.90, 10)
cadastrarProduto('Feijão', 8.50, 20)
cadastrarProduto('Leite', 5.99, 15)

// Listar produtos
listarProdutos()

// Carrinho do cliente recebe nome do produto e quantidade que quer
adicionarCarrinho('Arroz', 2)

listarProdutos()

