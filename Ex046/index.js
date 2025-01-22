const verdadeira = true

// Let tem escopo de bloco {... bloco}
// Var so tem escopo de função

let nome = 'Luiz' // criando
var nome2 = 'Luiz2'

if (verdadeira) {
    let nome = 'Carlos' // criando
    console.log(nome, nome2)

    if (verdadeira) {
        let nome = 'Eduardo' // caso isso nao exista ele vai buscar do bloco de fora ou seja aqui iria ser carlos caso o let de fora nao existe ele usa o escopo global que faz virar luiz.
        console.log(nome, nome2)
    }
    console.log(nome, nome2)
}

console.log(nome, nome2)