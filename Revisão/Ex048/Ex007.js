// Ex 88 - Sistema de supermercado
let estoqueMercado = []

function cadastrarProduto(produto, preco, estoque) {
    estoqueMercado.push({'Nome': produto, 'Preco': preco, 'Estoque':  estoque})
}


// Cadastra produtos
cadastrarProduto('Arroz', 25.90, 10)
cadastrarProduto('Feijão', 8.50, 20)
cadastrarProduto('Leite', 5.99, 15)

console.log(estoqueMercado)



