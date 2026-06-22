// Revisando objetos!
// Literal!
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}
const chave = 'nome'
console.log(pessoa[chave])
console.log(pessoa.sobrenome)

// construtor
const pessoa1 = new Object()
pessoa1.nome = 'Luiz'
pessoa1.sobrenome = 'Otávio'
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
pessoa1.falarNome = function () {
    console.log(`${this.nome} está falando seu nome.`)
}

pessoa1.falarNome()

delete pessoa1.nome
console.log(pessoa1)