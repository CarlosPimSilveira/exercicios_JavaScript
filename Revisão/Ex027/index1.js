const verdadeira = true
let nome = 'Luiz'
var nome2 = 'otavio'

if (verdadeira) {
    // trocamos o valor de nome dentro apenas do if ou seja fora ele ainda é luiz
    // Let tem escopo de bloco {}
    // var so tem escopo de função
    let nome = 'Carlos' // criando uma outra variavel nome com outro valor
    console.log(nome, nome2)

    if (verdadeira) {
        let nome = 'Outra coisa' // Criando mais uma vez outra variavel nome com escopo dentro
        // Caso nao tivesse esse let ele ia buscar no bloco de fora ai caso nao ache ia buscar fora do bloco 
        console.log('OK', nome)
    }
}
console.log(nome, nome2)

if (verdadeira) {
    var nome2 = 'Carlos'
    console.log(nome, nome2)

    if (verdadeira) {
        var nome2 = 'Outra coisa'
        console.log(nome, nome2)
    }
}
console.log(nome, nome2)
