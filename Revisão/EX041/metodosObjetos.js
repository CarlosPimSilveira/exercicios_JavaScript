/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

// Já vimos
Object.Keys(retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties(define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = {
    nome: 'Base',
    preco: 1.8
}
const caneca = {
    ...produto, 
    material: 'Porcelana'
}
const canec = Object.assign({}, produto, {
    mateira: 'Porcelana',
    fornecedor: 'Lojas 100'
})


console.log(produto)
console.log(caneca)
