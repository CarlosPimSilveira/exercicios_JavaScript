//For in -> le os indices ou chaves do objeto
//                 0        1      2
const frutas = ['Pera',  'Maça', 'Uva']

for (let indice in frutas) {
    console.log(frutas[indice])
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}

console.log(pessoa.nome)
console.log(pessoa['nome'])