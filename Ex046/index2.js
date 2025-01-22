const verdadeira = true
var sobrenome = 'Miranda'
// dessa vez a function vou usar viu que nao tinha a var entao fui procurar fora dela e achou entao ela usou a var fora do escopo dela.
// function nao permitem que as variaveis vazem para outros lugares.


function falaOi () {
    var nome = 'Luiz'
    console.log(sobrenome)

    if (verdadeira) {
        let NomeIf = 'Carlos'
        console.log(nome)
    }

    //console.log(NomeIf) // mesmo  o nomeif estando dentro da function o if impede que vaze pois o nomeif esta no bloco e uma let nao pode ser usada fora do bloco. ja se fosse uma var poderia.
} 

//console.log(nome) 
// se fizer isso vai dar erro pois o var ali dentro diferente de antes é protegido pela function

falaOi();