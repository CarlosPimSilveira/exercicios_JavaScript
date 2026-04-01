const verdadeira = true

let nome = 'Luiz'
var nome2 = 'Luiz'

if (verdadeira) {
    // trocamos o valor de nome dentro apenas do if ou seja fora ele ainda é luiz
    // Let tem escopo de bloco {}
    // var so tem escopo de função
    let nome = 'Carlos' // criando uma outra variavel nome com outro valor
    console.log(nome, nome2)

    if (verdadeira) {
        console.log('OK')
    }
}

console.log(nome, nome2)