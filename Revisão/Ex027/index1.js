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
console.log(nome, nome2) // nome2 foi trocado mesmo dentro do bloco ele ainda é trocado

var sobrenome = 'Miranda'

function falaOi() {
    var nome3 = 'Carlos'
    console.log('Oi', nome3, sobrenome)
    // Mas aqui ela tem acesso ao sobrenome pois ela ve coisas fora do bloco

    if (verdadeira) {
        let nome4 = 'Pim'
        console.log(nome4)
    }
    //console.log(nome4) // o bloco nao deixa a let aparecer fora mesmo tudo dentro da function
}
//console.log(nome3) não vai funcionar pq nome3 so existe dentro da function
falaOi()

console.log(sobrenome1, sobrenome2)
var sobrenome1 = 'Silva'
// Isso ocorre com todas as variaveis var ele eleva a declaração 
let sobrenome2 = 'Edu'
// Isso nao ocorre com let

