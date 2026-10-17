// Ex 88 - Sistema de supermercado
let estoqueMercado = []
// Itens que o consumidor pode pegar
let carrinho = []

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
    estoqueMercado.forEach((produto) => {
        if (produto.Nome.toLowerCase() === nomeProduto.toLowerCase()) {
            if (produto.Estoque > 0 && 
                qtd <= produto.Estoque && 
                Number.isInteger(qtd) && 
                !(qtd <= 0)) {
                produto.Estoque -= qtd
                carrinho.push({'Nome': nomeProduto, 'Preco': produto.Preco, 'Quantidade':  qtd})
            }
        }
    })
}

// Lista carrinho do cliente
function listarCarrinhoCliente() {
        if (!carrinho.length) {
        return console.log('Carrinho vazio!')
    } else {
        console.log('Carrinho cliente!')
        console.log('----------------')
        carrinho.forEach((carrinho, index) => {
            console.log(index+1 + `. Nome: ` + carrinho.Nome + ` | Preço: ` + carrinho.Preco + `  | Quantidade: ` + carrinho.qtd)
        });
        console.log('----------------')
    }
}

// Cadastra produtos
cadastrarProduto('Arroz', 25.90, 10)
cadastrarProduto('Feijão', 8.50, 20)
cadastrarProduto('Leite', 5.99, 15)

// Listar produtos
listarProdutos()

// Carrinho do cliente recebe nome do produto e quantidade que quer
adicionarCarrinho('Arroz', 2)

// Lista carrinho do cliente
listarCarrinhoCliente()

// apenas confere o estoque
listarProdutos()

