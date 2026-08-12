// Criando classes

class Pessoa{
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome} está falando.`)
    }

    comer() {
        console.log(`${this.nome} está comendo.`)
    }

    beber() {
        console.log(`${this.nome} está bebendo.`)
    }
}

const p1 = new Pessoa('Luiz', 'Miranda')
const p2 = new Pessoa('Maria', 'Miranda')
const p3 = new Pessoa('Joana', 'Miranda')
const p4 = new Pessoa('João', 'Miranda')
console.log(p1)
