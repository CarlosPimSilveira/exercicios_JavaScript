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
// Considerando aprovado nota maior ou igual 6
const AlunoNota21 = 4
if (AlunoNota21 === 10) {
    console.log('Aluno Aprovado! nota maxima!')
} else if (AlunoNota21 >= 6 && AlunoNota21 <= 9) {
    console.log('Aluno Aprovado! nota dentro da media')
} else if (AlunoNota21 >= 5) {
    console.log('Recuperação!')
} else {
    console.log('Reprovado!')
}

// Ex 22 - Calcule a situação de um aluno usando média:
/* 
    < 5 → reprovado
    5–6.9 → recuperação
    >= 7 → aprovado
*/
const nota122 = 8
const nota222 = 6
const nota322 = 9
let media22 = (nota122 + nota222 + nota322) / 3
if (media22 >= 7) {
    console.log('Aprovado!')
} else if (media22 >= 5) {
    console.log('Recuperação!')
} else {
    console.log('Reprovado!')
}

// Ex 23 - Crie uma calculadora usando +, -, * e /. 
