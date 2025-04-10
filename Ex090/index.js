// Criando classes
// faz a mesma coisa que uma function construtora

// Primeira letra tem que ser maiuscula
class Pessoa {
    // aqui coloca os parametros
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome} esta falando`)
    }

    comer() {
        console.log(`${this.nome} esta comendo`)
    }

    beber() {
        console.log(`${this.nome} esta bebendo`)
    }
}

const p1 = new Pessoa('Carlos', 'Pim')
const p2 = new Pessoa('Eduardo', 'Pim')
const p3 = new Pessoa('Jose', 'Pim')
const p4 = new Pessoa('Luiz', 'Pim')
console.log(p1)
p1.beber()
p2.comer()
// usa o mesmo metodo para todos o que poupa memoria pois todas estao pegando do pai


//  Eleas fazema mesma coisa porem são montadas de forma diferente pode ser mais facil e rapido fazer como no codigo acima 
function Pessoa2(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} esta falando`)
}

const p5 = new Pessoa2('Eduarda', 'Maria')
p5.falar() 