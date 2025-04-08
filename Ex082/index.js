/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

Ja vimos
Object.keys (retorna as chaves)
Object.freeze(congela o objeto)
Object.defineProperties(define varias propriedades)
Object.defineProperty(define uma propriedade)
*/

const produto = {nome: 'caneca', preco: 1.8}
const outraCoisa = {...produto, estoque: 3, material: 'porcelana'} //fizemos uma copia do nosso objeto
const p3 = Object.assign({}, produto, {estoque: 5, material: 'teste'}) //criando um objeto e copiando o produto para dentro

outraCoisa.nome = 'Teste'
outraCoisa.preco = 2.5
console.log(produto)
console.log(outraCoisa)
console.log(p3)
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer coisa'
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
produto.nome = 'outra coisa'
console.log(produto) //não foi alterado pq nao permitimos no defineProperty
console.log(Object.keys(produto)) //"cria" um array com as chaves do meu objeto
console.log(Object.values(produto)) // pega so os valores e nao as chaves(nome e preco)
console.log(Object.entries(produto)) // faz um array com 2 arrays internos pois traz as chaves e os valores!

for(let entry of Object.entries(produto)) {
    console.log(entry) // um array com 2 objetos 
}

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}
