// Reduce - reduzindo o array

// Some todos os numeros (Reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)
//               0  1   2   3  4  5  6  7  8  9   10  11  12... 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor
    return acumulador
}, 0) // -> valor inicial para o oacumulador! 
// Reduzindo um array a um unico elemento!
console.log(total)
const totalPar = numeros.reduce(function(acumulador, valor, indice, array) {
    if (valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, [])
console.log(totalPar)
const dobroValor = numeros.reduce(function(acumulador, valor) {
    acumulador.push(valor * 2)
    return acumulador
}, [])
console.log(dobroValor)

// Retorne a pessoa mais velha!
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]