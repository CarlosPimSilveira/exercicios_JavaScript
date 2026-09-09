// NV 2 - Condicionais
// 16 - Verifique se um número é positivo, negativo ou zero.
let Num16 = [10, -5, 20, -1, -6, -8, 8, 0]
for (let c = 0; c < Num16.length; c++) {
    if (Num16[c] > 0) {
        console.log((Num16[c] % 2 === 0) 
        ? `O numero ${Num16[c]} é positivo e par` 
        : `O numero ${Num16[c]} é positivo e ímpar`)

    } else if (Num16[c] < 0) {
        console.log((Num16[c] % 2 === 0) 
        ? `O numero ${Num16[c]} é negativo e par` 
        : `O numero ${Num16[c]} é negativo e ímpar`)

    } else {
        console.log(`O numero ${Num16[c]} é positivo e par`)
    }
}

// Ex 17 - Verifique se um número é par ou ímpar.

const num17 = [10, 50, 55, 20, 11, 1, 2, 3, 4, 5, 6, 7, 8]

for(let c = 0; c < num17.length; c++) {
    if (num17[c] % 2 === 0) {
        console.log(`O numero ${num17[c]} é par`)
    } else {
        console.log(`O numero ${num17[c]} é ímpar`)
    }
}

// Ex 18 - Verifique qual de dois números é maior.
const num18 = [10, 50, 55, 20, 11, 1, 2, 3, 4, 5, 6, 7, 8]
let NumAntMaior18 = 0
for(let c = 0; c < num18.length; c++) {
    if (num18[c] > NumAntMaior18) NumAntMaior18 = num18[c]
}
console.log(NumAntMaior18)

// Ex 19 - Verifique qual de três números é maior. 
const A19 = 10
const B19 = 20
const C19 = 15
if(A19 > B19 && A19 > C19) {
    console.log(`O maior numero é: ${A19}`)
} else if(B19 > A19 && B19 > C19) {
    console.log(`O maior numero é: ${B19}`)
} else {
    console.log(`O maior numero é: ${C19}`)
}

// EX 20 - Verifique se uma pessoa é maior de idade.
const IdadePessoa20 = 18
if (IdadePessoa20 > 18) {
    console.log('É maior de idade')
} else {
    console.log('É menor de idade')
}

// Ex 21 - Verifique se um aluno foi aprovado ou reprovado.
// Considerando aprovado nota maior que 6
const AlunoNota21 = 7

