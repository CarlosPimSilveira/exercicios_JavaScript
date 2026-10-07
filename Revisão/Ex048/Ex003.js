// Ex 60 — Crie uma função de calculadora.

let Num1_60 = 10
let Num2_60 = 0
let Operador_60 = '/'

function calcular(n1, n2, operador) {
    if (operador !== '+' && operador !== '-' && operador !== '*' && operador !== '/') {
        return console.log('Operador invalido! ERRO');
    }
    switch (operador) {
        case '+':
            return n1 + n2
        case '-':
            return n1 - n2
        case '*':
            return n1 * n2
        case '/':
            if (n2 === 0) {
                console.log(`O valor ${n2} é invalido!`)
                return
            }
            return n1 / n2
    }
}

console.log(`A soma de ${Num1_60} ${Operador_60} ${Num2_60} da um total de ` + calcular(Num1_60, Num2_60, Operador_60))

// Ex 62 - Calcule a soma dos números de um array.

let a61 = [10, -5, 20, -10]

function somarArray(n1) {
    let somar61 = 0
    if (n1.length === 0) {
        return console.log('Array vazio calculo invalido!')
    }
    for (let c = n1.length-1; c >= 0; c--) {
        somar61 += n1[c]
    }
    return somar61
}

console.log(`A soma dos valores do array são ` + somarArray(a61))

// Ex 63 - Calcule a média dos números de um array.


















