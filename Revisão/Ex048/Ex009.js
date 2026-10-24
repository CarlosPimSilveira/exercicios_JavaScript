// Exercício 90 — Sistema de Controle de Estoque
let produto = []

function cadastrarProduto(nome, preco, quantidade) {
    if (String(nome).trim() === "" || preco === null || preco === undefined || String(preco).trim() === "" || preco <= 0 || !Number.isFinite(preco) || !Number.isFinite(quantidade) || quantidade < 0 || quantidade === null || quantidade === undefined || String(quantidade).trim() === "") {
        return console.log(`Cadastro invalido! nome, preco ou quantidade invalidos!`)
    }
    let produtoIgual = false

    produto.forEach((prod) => {
        if (prod.Nome.toLowerCase() === nome.toLowerCase())
            produtoIgual = true
    })

    if (produtoIgual) 
        return console.log('Produto ja cadastrado!')

    produto.push({
        'Nome': nome,
        'Preco': preco,
        'Quantidade': quantidade
    })
}

function entradaEstoque(nome, quantidade) {
    let novoProduto = true

    if (quantidade <= 0 || !Number.isInteger(quantidade))
        return console.log('Entrada invalida! valor do estoque errado!')

    if (String(nome).trim() === "" || typeof nome !== 'string')
        return console.log('Entrada invalida! nome errado!')

    produto.forEach((prod) => {
        if (prod.Nome.toLowerCase() === nome.toLowerCase()) {
            novoProduto = false
            return prod.Quantidade += quantidade
        }
    })

    if (novoProduto) {
        return console.log('Produto não cadastrado!')
    }
}

function saidaEstoque(nome, quantidade) {
    let prodNaoAchado = true

    if (quantidade <= 0 || !Number.isInteger(quantidade))
        return console.log('Saida invalida! valor do estoque errado!')

    if (String(nome).trim() === "" || typeof nome !== 'string')
        return console.log('Saida invalida! nome errado!')

    produto.forEach((prod) => {
        if (prod.Nome.toLowerCase() === nome.toLowerCase()) { 
            if (quantidade > prod.Quantidade) {
                return console.log('Quantidade invalida! saida maior que estoque')
            }
            prodNaoAchado = false
            prod.Quantidade -= quantidade
        }
    })

    if (prodNaoAchado) {
        return console.log('Produto não cadastrado!')
    }
}

cadastrarProduto('Chocolate', 1.99, 50)
cadastrarProduto('Cafe', 5.99, 10)
cadastrarProduto('açucar', 8.99, 15)
cadastrarProduto('manteiga', 15.99, 9)

entradaEstoque('Cafe', 5)
entradaEstoque('arroz', 5)

saidaEstoque('Cafe', 3)
saidaEstoque('chocolate', 1)
saidaEstoque('Cafeeee', 3)

console.log(produto)


