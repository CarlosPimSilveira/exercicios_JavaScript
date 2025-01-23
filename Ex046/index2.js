const verdadeira = true
var sobrenome = 'Miranda'
// dessa vez a function procura a var no bloco e nao acha entao busca de fora dela e achou entao ela usou a var fora do escopo dela.
// function nao permitem que as variaveis vazem para outros lugares.
var NomeVar = 'Jose' // var e let aqui aparecem dentro da function e if.
function falaOi () {
    var nome = 'Luiz'
    console.log(sobrenome)

    if (verdadeira) {
        let NomeIf = 'Carlos'
        var NomeVarFunction = 'Eduardo' // var vaza para fora do bloco if mas nao para fora do bloco function mas let nao vaza para fora do bloco if.
        console.log(nome)
    }

    //console.log(NomeIf) // mesmo  o nomeif estando dentro da function o if impede que vaze pois o nomeif esta no bloco e uma let nao pode ser usada fora do bloco. ja se fosse uma var poderia.
    console.log(NomeVar)
    console.log(NomeVarFunction)
} 

//console.log(nome) 
// se fizer isso vai dar erro pois o var ali dentro diferente de antes é protegido pela function
console.log(NomeVar)

falaOi();