const verdadeira = true

// Let tem escopo de bloco {... bloco}
// Var so tem escopo de função

let nome = 'Luiz' // criando
var nome2 = 'Luiz2'

if (verdadeira) {
    let nome = 'Otavio' // criando
    var nome2 = 'Rogerio' //redeclarada

    if (verdadeira) {
        let nome = 'outra coisa'
        var nome2 = 'Ronaldo' //redeclarando
    }
}

console.log(nome, nome2) //aqui o resultado é luiz + ronaldo pois o var aqui esta em escopo global e ou fora de uma proteção de function o que faz o console.log poder usalo.