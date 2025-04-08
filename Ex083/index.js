// Construtora => molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenom = sobrenome
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome
} //molde para criar novos objetos!

// instancia
const pessoa1 = new Pessoa('Luiz', 'O.')  // <- Pessoa = função ocnstrutora 
const pessoa2 = new Pessoa('Maria', 'A.') // <- Pessoa = função ocnstrutora

console.log(pessoa1)
console.log(pessoa2)