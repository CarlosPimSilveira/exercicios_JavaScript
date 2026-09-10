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
const N123 = 10
const N223 = 15
const Sinal23 = '/'
let resposta23 = 0

switch(Sinal23) {
    case '+':
        resposta23 = N123 + N223
        console.log(`Valor total é: ${resposta23}`)
        break;
    case '-':
        resposta23 = N123 - N223
        console.log(`Valor total é: ${resposta23}`)
        break;
    case '/':
        resposta23 = N123 / N223
        console.log(`Valor total é: ${resposta23}`)
        break;
    case '*':
        resposta23 = N123 * N223
        console.log(`Valor total é: ${resposta23}`)
        break;
}

// Ex 24 - Verifique se um ano é bissexto.
const ano24 = 2000
if (ano24 % 400 === 0) {
    console.log('O ano é bissexto')
} else if (ano24 % 100 === 0) {
    console.log('Ano não bissexto')
} else if (ano24 % 4 === 0) {
    console.log('O ano é bissexto')
} else {
    console.log('Ano não bissexto')
}

// Ex 25 - Verifique se três números podem formar um triângulo.
const ladoA25 = 40
const ladoB25 = 15
const ladoC25 = 40

if (ladoA25 >= ladoB25 && ladoA25 >= ladoC25) {
    if ((ladoB25 + ladoC25) > ladoA25) {
        console.log('É capaz de formar um triângulo')
    } else {
        console.log('Não é capaz de formar um triângulo')
    }
} else if (ladoB25 >= ladoA25 && ladoB25 >= ladoC25) {
    if ((ladoA25 + ladoC25) > ladoB25) {
        console.log('É capaz de formar um triângulo')
    } else {
        console.log('Não é capaz de formar um triângulo')
    }
} else if (ladoC25 >= ladoA25 && ladoC25 >= ladoB25) {
    if ((ladoB25 + ladoA25) > ladoC25) {
        console.log('É capaz de formar um triângulo')
    } else {
        console.log('Não é capaz de formar um triângulo')
    }
} 

// Ex 26 - Identifique se um triângulo é equilátero, isósceles ou escaleno.
const triA26 = 20
const triB26 = 20
const triC26 = 10

if (triA26 === triB26 && triA26 === triC26) {
    console.log('É um triangulo Equilátero!')
}
if ((triA26 === triB26 && triA26 !== triC26) ||
            (triA26 === triC26 && triA26 !== triB26) ||
                (triB26 === triC26 && triB26 !== triA26)) {
    console.log('É um triangulo Isósceles!')
}
if ((triA26 !== triB26 && triA26 !== triC26) &&
    (triB26 !== triA26 && triB26 !== triC26) &&
    (triC26 !== triA26 && triC26 !== triB26)) {
    console.log('É um triangulo Escaleno!')
}


