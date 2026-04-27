function funcao( {nome, sobrenome, idade} ) {
    console.log(nome, sobrenome, idade)
}
funcao( {nome: 'luiz', sobrenome: 'otávio', idade: 20} )

function funcao1 ([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}
funcao1(['Luiz otávio', 'miranda', 30])

function conta(operador, acumulador, numeros) {
    console.log(operador, acumulador, numeros)
}