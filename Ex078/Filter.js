// Filter, map, reduce
// Filter sempre retorna um array, com a mesma quantidade de elementos ou menos!
// Filtrando um array
// Retorne os nummeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

//function callbackFilter(valor) {
//    return valor > 10
//}

const numerosFiltrados = numeros.filter(valor => valor > 10)

console.log(numerosFiltrados)

// Retorne as pessoas que tem o nome de 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
]

const nome5Letras = pessoas.filter(pessoa => pessoa.nome.length >= 5)
console.log(nome5Letras)

const idade50 = pessoas.filter(idade => idade.idade > 50)
console.log(idade50)

//const nomeA = pessoas.filter(nome => nome.nome.slice(-1) === 'a' )
const nomeA = pessoas.filter(nome => nome.nome.toLocaleLowerCase().endsWith('a'))
// ENDSWITH - "ou seja" busca a ultima letra
console.log(nomeA)