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

//mesma coisa so que function construtora
function Pessoa2(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`)
}

const p1 = new Pessoa('Luiz', 'Miranda')
const p2 = new Pessoa('Maria', 'Miranda')
const p3 = new Pessoa('Joana', 'Miranda')
const p4 = new Pessoa('João', 'Miranda')
const p5 = new Pessoa2('Carlos', 'Jose')
console.log(p1)
