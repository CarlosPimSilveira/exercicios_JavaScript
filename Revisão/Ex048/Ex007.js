// Ex 88 - Sistema de supermercado
let estoqueMercado = []
// Itens que o consumidor pode pegar
let carrinho = []

function cadastrarProduto(produto, preco, estoque) {
    if (preco >= 0 && estoque >= 0 && Number.isInteger(estoque)) {
        estoqueMercado.push({ 'Nome': produto, 'Preco': preco, 'Estoque': estoque })
    } else {
        return console.log('Produto com informações invalidas')
    }
}

function listarProdutos() {
    if (!estoqueMercado.length) {
        return console.log('Estoque vazio!')
    } else {
        estoqueMercado.forEach((produto, index) => {
            console.log(index + 1 + `. Nome: ` + produto.Nome + ` | Preço: ` + produto.Preco + ` | Estoque: ` + produto.Estoque)
        });
    }
}

function adicionarCarrinho(nomeProduto, qtd) {
    let produtoEncontrado = false
    let estoqueZeado = false
    let numNegativo = false

    estoqueMercado.forEach((produto) => {
        if (produto.Nome.toLowerCase() === nomeProduto.toLowerCase()) {
            produtoEncontrado = true
            if (qtd <= 0 || !Number.isInteger(qtd)) {
                numNegativo = true
            }
            else if (produto.Estoque < qtd) {
                estoqueZeado = true
            } else if (
                produto.Estoque > 0 &&
                qtd <= produto.Estoque &&
                Number.isInteger(qtd) &&
                !(qtd <= 0)
            ) {
                produto.Estoque -= qtd

                carrinho.push({
                    'Nome': nomeProduto,
                    'Preco': produto.Preco,
                    'Quantidade': qtd
                })
            }
        }
    })

    if (!produtoEncontrado)
        return console.log('Produto não existe!')

    if (estoqueZeado)
        return console.log('Quantidade maior que o estoque')

    if (numNegativo)
        return console.log('Numero negativo ou invalido!')
}

// Lista carrinho do cliente
function listarCarrinhoCliente() {
    if (!carrinho.length) {
        return console.log('Carrinho vazio!')
    } else {
        console.log('Carrinho cliente!')
        console.log('----------------')
        carrinho.forEach((carrinho, index) => {
            console.log(index + 1 + `. Nome: ` + carrinho.Nome + ` | Preço: ` + carrinho.Preco + `  | Quantidade: ` + carrinho.Quantidade)
        });
        console.log('----------------')
    }
}

function calcularTotalCarrinho() {
    let totcarrinho = 0
    carrinho.forEach((carrinho) => {
        totcarrinho += (carrinho.Quantidade * carrinho.Preco)
    })
    console.log(totcarrinho)
}

// Remove itens carrinho
function removeItensCarrinho(produto, un) {
    let posicao = -1
    
    carrinho.forEach((item, index) =>{
        if (produto.toLowerCase() === item.Nome.toLowerCase()) {
            posicao = index
        }
    })
    carrinho[posicao].Quantidade -= un
}

// Cadastra produtos
cadastrarProduto('Arroz', 25.90, 10)
cadastrarProduto('Feijão', 8.50, 20)
cadastrarProduto('Leite', 5.99, 15)

adicionarCarrinho('Arroz', -5)
adicionarCarrinho('Arroz', 0)
adicionarCarrinho('Arroz', 2.5)

// Listar produtos
listarProdutos()

// Carrinho do cliente recebe nome do produto e quantidade que quer
adicionarCarrinho('Arroz', 2)
adicionarCarrinho('Leite', 5)
adicionarCarrinho('Chocolate', 5)
adicionarCarrinho('Leite', 50)

// Lista carrinho do cliente
listarCarrinhoCliente()

// apenas confere o estoque
listarProdutos()

// Calcular o valor do carrinho do cliente
calcularTotalCarrinho()

// Remove produtos do carrinho
removeItensCarrinho('Leite', 2)

// Lista carrinho do cliente
listarCarrinhoCliente()



