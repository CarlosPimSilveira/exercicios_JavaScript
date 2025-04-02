// Reduce - usada para reduzir algo
// Some todos os numeros (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const total = numeros.reduce(function(Acumulador, valor, indice, array) {
    Acumulador += valor
    return Acumulador
}, 0) //valor inicial para o acumulador!

const pares = numeros.reduce(function(Acumulador, valor, indice, array) {
    if(valor % 2 === 0) Acumulador.push(valor)
    return Acumulador
}, [])

const dobro = numeros.reduce(function(Acumulador, valor) {
    Acumulador.push(valor * 2) 
    return Acumulador
}, [])

console.log('Total: ' + total, 'Pares: ' + pares, 'Dobro: ' + dobro)

// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 64 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 69 },
    { nome: 'Wallace', idade: 78 }
]

const maisVelha = pessoas.reduce(function(acumualdor, valor) {
    if(acumualdor.idade > valor.idade) return acumualdor
    return valor
}, 0)

console.log(maisVelha)