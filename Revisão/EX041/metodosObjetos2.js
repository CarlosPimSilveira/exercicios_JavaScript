const produto = { nome: 'Produto', preco: 1.8 }
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
})

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
// Apenas o nome do produto esta configurado e nao vai mudar ou aceitar mudanças porem o preço vai
produto.preco = 'Outra coisa'
delete produto.nome 
console.log(produto)

