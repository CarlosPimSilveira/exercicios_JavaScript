// Funções construtoras (constructor functions)
// Função construtora -> objetos
// Função fabrica -> objetos
// construtora -> deve sempre iniciar com letra maiuscula (new)

function Pessoa(nome, sobrenome) {
    // Atriubutos ou métodos privadas!
    const ID = 123456;
    const metodoInterno = function() {

    };

    // Atriubutos ou métodos publicos!
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function() {
        console.log( this.nome + ' Sou um método!')
    }
} // Pessoa.nome = 

const p1 = new Pessoa('Carlos', 'Pim')
const p2 = new Pessoa('Maria', 'Oliveira')

p1.metodo()

console.log(p1.nome)
console.log(typeof(p1.nome))
console.log(p2.nome)
console.log(typeof(p2.nome))