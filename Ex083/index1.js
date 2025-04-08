/*
    Javascript é baseada em protótipos para passar propriedades e métodos de um objeto para outro.

    Definição de protótipo
    Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

    Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro do próprio objeto e depois a cadeia do protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/
// Construtora => molde (classe) ProtoTypes
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenom = sobrenome
    //this.nomeCompleto = () => 'Original: ' + this.nome + ' ' + this.sobrenome //Esse vai ser sobrescrever o debaixo!
} //molde para criar novos objetos!

Pessoa.prototype.nomeCompleto = function() { // fazer isso melhora o desempenho pois se nos tivessemos varias pessoas ele iria criar um novo metodo para cada uma delas agora fazendo dessa forma usamos o __proto__. usando a referencia do pai dela. e todas as instancias vao usar isso melhorando o sistema
    return this.nome + ' ' + this.sobrenome
}

// instancia
const pessoa1 = new Pessoa('Luiz', 'O.')  // <- Pessoa = função ocnstrutora 
const data = new Date() // <- Date = Função construtora

console.log(pessoa1)
console.log(data)