//Funções construtoras (constructor functions)
//Funções construtora -> objetos
//funções fabrica -> objetos
//construtora -> pessoa (new) construtora começa com maiuscula

function Pessoa (nome, sobrenome) {
    //Atributos ou métodos privados!
    const ID = 123456

    const metodoInterno = function() {

    }

    //Atrubutos ou metodos publicos!
    this.nome = nome
    this.sobrenome = sobrenome

    //um metodo é uma função dentro do objeto
    this.metodo = function () {
        console.log('Sou um método!')
    }
} // Pessoa.nome =  nome

const p1 = new Pessoa('Luiz', 'Otávio')
const p2 = new Pessoa('Maria', 'Oliveira')

console.log(p1.nome)
console.log(p2.nome)
p1.metodo();
console.log(typeof(p1))

