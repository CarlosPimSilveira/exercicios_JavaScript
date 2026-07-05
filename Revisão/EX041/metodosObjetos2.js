
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
// Apenas o nome do produto esta configurado e nao vai mudar ou aceitar mudanças porem o preço vai
produto.preco = 'Outra coisa'
delete produto.nome 
console.log(produto)

