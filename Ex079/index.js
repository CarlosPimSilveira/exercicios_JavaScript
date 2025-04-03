// Revisando objetos
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 25
}

const chave = 'idade'
console.log(pessoa.nome, pessoa['sobrenome'], 'idade: ' + pessoa[chave])

const pessoa1 = new Object()
pessoa1.nome = 'Carlos'
pessoa1.sobrenome = 'Eduardo'
pessoa1.idade = 30
delete pessoa1.nome

console.log(pessoa1)

pessoa1.falarNome = function() {
    console.log(`${this.sobrenome} está falando seu nome.`)
}

pessoa1.getDataNascimento = function() {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}

pessoa1.falarNome()
console.log(pessoa1.getDataNascimento())

for (let chave in pessoa1) {
    console.log(pessoa1[chave])
}

// factory functions / constructor functions / Classes
function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        get nomecompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Luiz', 'Eduardo')
console.log(p1.nomecompleto)

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

// Palavra new vai criar um objeto vazio e vai pegar a palavra this 
// {}
const p2 = new Pessoa('Carlos', 'Miranda')
console.log(p2.nome, p2.sobrenome)

// this 
// const p2 = {}
// p2.nome = 'Luiz'
