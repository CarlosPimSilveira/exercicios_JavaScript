const produto = { nome: 'Produto', preco: 1.8 }
Object.freeze(produto)
produto.nome = 'Outro nome' // - Não muda pois ele ta freeze
const caneca = { nome: produto.nome, preco: produto.preco }

console.log(Object.keys(produto))


