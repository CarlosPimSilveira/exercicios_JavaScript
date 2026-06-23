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
pessoa1.idade = 27
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
pessoa1.falarNome = function () {
    return(`${this.nome} está falando seu nome.`)
}

pessoa1.getDataNascimento = function () {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}

console.log(pessoa1.getDataNascimento())

console.log(pessoa1.falarNome())

delete pessoa1.nome
console.log(pessoa1)