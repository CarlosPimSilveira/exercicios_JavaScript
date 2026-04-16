// Escreva uma função que recebe um número e retorne o seguinte: 
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número NÃO é divisível por 3 e 5 = retorna o próprio número
// Checar se o número é realmente um número
// Use a função com números de 0 a 100

function fizzbuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'
    if (typeof numero !== 'number') return numero
    if (numero % 3 === 0) return 'Fizz'
    if (numero % 5 === 0) return 'Buzz'
    return numero
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzbuzz(i))
}