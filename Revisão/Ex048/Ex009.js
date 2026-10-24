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

cadastrarProduto('Chocolate', 1.99, 50)
cadastrarProduto('Cafe', 5.99, 10)
cadastrarProduto('açucar', 8.99, 15)
cadastrarProduto('manteiga', 15.99, 9)






