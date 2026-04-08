const frutas = ['Pera', 'Maça', 'Uva'];
//                 0       1      2

for (let i = 0; i < frutas.length; i++) {
    //console.log(frutas[i])
}

// For in -> le os indices ou chaves do objetos!
for (let indice in frutas) {
    console.log(frutas[indice])
}

const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Pim',
    idade: 27
}

for (let chaves in pessoa) {
    console.log(pessoa[chaves])
}

const chave = 'nome'
console.log(pessoa[chave])
