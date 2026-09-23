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

// Ex 27 - Crie um sistema simples de login.
const login = 'admin'
const senha = 123456

if (login === 'admin' && senha === 123456) {
    console.log('Logado')
} else if (login != 'admin') {
    console.log('Login invalido')
} else {
    console.log('Senha invalida')
}

// Ex 28 - Verifique se uma senha possui pelo menos 8 caracteres

const senha28 = 123456789

if (String(senha28).length >= 8) {
    console.log('Senha possui 8 caracteres ou mais')
}

// Ex 31 - Mostre os números de 1 a 10
for(let c = 1; c <= 10; c++) {
    console.log(c)
}

// Ex 32 - Mostre os números de 10 a 1.
for(let c = 10; c >= 1; c--) {
    console.log(c)
}

console.log('Par')

// Ex 33 - Mostre todos os números pares de 1 a 100
for(let n = 1; n <= 100; n++) {
    if (n % 2 === 0)
        console.log(n)
}

console.log('Impar')

// Ex 34 - Mostre todos os números ímpares de 1 a 100.
for (let n = 1; n <= 100; n++) {
    if (n % 2 !== 0) {
        console.log(n)
    }
}

// Ex 35 - Calcule a soma de 1 até 100.
let soma = 0
for (let p = 1; p <= 100; p++) {
    soma += p
}
console.log(soma)

// Ex 36 - Calcule a soma de todos os números pares de 1 a 100
let soma36 = 0
for (let c = 1; c <= 100; c++) {
    if (c % 2 === 0) {
        soma36 += c
    }
}
console.log(soma36)

// Ex 37 - Mostre a tabuada de um número.
const tab = 3
for (let c = 0; c <= 10; c++) {
    console.log(tab + ' x ' + c + ' = ' + tab*c)
}

// Ex 38 - Calcule o fatorial de um número. 
function calcularFatorial(n) {
    if (n < 0) return "Não existe fatorial de número negativo.";
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(calcularFatorial(5));

// Ex 39 - Conte quantos números existem entre 1 e 100 divisíveis por 3.
let soma39 = 0

for (let c = 1; c <= 100; c++) {
    if (c % 3 === 0) 
        soma39 += 1
}
console.log(soma39)

// Ex 40 - Mostre os divisores de um número. 
let numero40 = 12
let soma40 = [] 
for (let c = 1; c <= numero40; c++) {
    if (numero40 % c === 0)
        soma40.push(c)
}
console.log(soma40)

// Ex 41 - Mostre todos os números primos entre 1 e 100.












