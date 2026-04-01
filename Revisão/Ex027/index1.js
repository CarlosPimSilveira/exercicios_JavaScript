const verdadeira = true

let nome = 'Luiz'
var nome2 = 'Luiz'

if (verdadeira) {
    // trocamos o valor de nome dentro apenas do if ou seja fora ele ainda é luiz
    // Let tem escopo de bloco {}
    let nome = 'Carlos'
    console.log(nome, nome2)
}

console.log(nome, nome2)