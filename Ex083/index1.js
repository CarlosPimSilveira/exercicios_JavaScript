/*
    Javascript é baseada em protótipos para passar propriedades e métodos de um objeto para outro.

    Definição de protótipo
    Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

    Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro do próprio objeto e depois a cadeia do protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/
// Construtora => molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenom = sobrenome
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome
} //molde para criar novos objetos!

// instancia
const pessoa1 = new Pessoa('Luiz', 'O.')  // <- Pessoa = função ocnstrutora 
const data = new Date() // <- Date = Função construtora

console.log(pessoa1)
console.log(data)