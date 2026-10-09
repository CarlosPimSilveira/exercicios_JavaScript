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

let a63 = [10, 20, 30]

function mediaArray(n1) {
    if (n1.length !== 0) {
        let resulMedia = 0
        for (let c = n1.length - 1; c >= 0; c--) {
            resulMedia += n1[c]
        }
        return resulMedia / n1.length
    } else {
        return('Array vazio')
    }
}

console.log(`A media dos valores é ` + mediaArray(a63))

// Ex 64 — Encontre o maior número de um array.

let aMaior64 = [10, -10, 100, -100]

function maiorNumArrat(n1) {
    let maiorNum64 = n1[0]
    for (let c = n1.length-1; c >= 0; c--) {
        if (maiorNum64 < n1[c])
            maiorNum64 = n1[c]
    }
    return maiorNum64
}

console.log(`O numero maior do array é ` + maiorNumArrat(aMaior64))

// Ex 65 — Encontre o menor número de um array.
let aMenor65 = [10, 100, 5, 90]

function menorNumArrat(n1) {
    let menorNum65 = n1[0]
    for (let c = n1.length-1; c >= 0; c--) {
        if (menorNum65 > n1[c])
            menorNum65 = n1[c]
    }
    return menorNum65
}

console.log(`O numero maior do array é ` + menorNumArrat(aMenor65))

// Ex 66 — Conte quantos números pares existem em um array.
let par66 = [2, 5, 7, 6, 8, 10, 11, 13, 15, 17]

function numPar(n1) {
    let parTot = 0
    for (let c = n1.length-1; c >= 0; c--) {
        if (n1[c] % 2 === 0) {
            parTot += 1
        }
    }
    return parTot
}

console.log(`O total de numeros pares é ` + numPar(par66))

// Ex 67 — Conte quantos números ímpares existem em um array.
let imp67 = [2, 5, 7, 6, 8, 10, 11, 13, 15, 17]

function numImp(n1) {
    let impTot = 0
    for(let c = n1.length-1; c >= 0; c--) {
        if (n1[c] % 2 !== 0)
            impTot += 1
    }
    return impTot
}

console.log(`O total de numeros impares é ` + numImp(imp67))

// Ex 68 — Crie um novo array contendo apenas os números pares.

let aNum68 = [2, 5, 6, 7, 9, 10, 12, 15, 20, 25, 35, 36, 44]

function newArrayPar(n1) {
    let newArrayPar = []
    for (let c = 0; c < n1.length; c++) {
        if (n1[c] % 2 === 0)
            newArrayPar.push(n1[c]) 
    }
    return newArrayPar
}

console.log(`O array com apenas numeros pares ` + newArrayPar(aNum68))

//n1.length-1

let aNum681 = [2, 5, 6, 7, 9, 10, 12, 15, 20, 25, 35, 36, 44]

function newArrayPar1(n1) {
    let newArrayPar1 = n1.filter( num => num % 2 === 0)
    return newArrayPar1
}

console.log(`O array com apenas numeros pares ` + newArrayPar1(aNum681))

// Ex 69 — Crie um novo array contendo apenas os números maiores que 10.

let aMaior10 = [ 5, 6, 9, 10, 11, 15, 16, 17, 22, 3, 1 ]

function maiorArray10(n1) {
    let newArray10 = []
    for (let c = 0; c <= n1.length-1; c++) {
        if (n1[c] > 10)
            newArray10.push(n1[c])
    }
    return newArray10
}

console.log(`O novo array com numeros maiores que 10: ` + maiorArray10(aMaior10))

// Ex 70 — Inverta a ordem dos elementos de um array.

let invArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function invnewArray(n1) {
    let arrayInvertido = []

    for (let c = n1.length-1; c >= 0; c--) {
        arrayInvertido.push(n1[c])
    }

    return arrayInvertido
}

console.log(`Os dados do array invertido ficam: ` + invnewArray(invArray))

// Ex 71 — Verifique se determinado valor existe em um array.
let verArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function buscaValor(n1, vlrBuscar) {
    let achouValorSerBuscado = false
    for (let c = 0; c < n1.length-1; c++) {
        if (n1[c] === vlrBuscar) {
            achouValorSerBuscado = true
            break
        }
    }
    if (achouValorSerBuscado) {
        return `O numero ${vlrBuscar} existe no array`
    } else {
        return `O numero ${vlrBuscar} não existe no array`
    }

}

console.log(`Resultado da busca: ` + buscaValor(verArray, 5))

// Ex 72 - Conte quantas vezes determinado valor aparece em um array.
let a72 = [2, 4, 2, 6, 4, 2, 7, 2, 9, 4, 8, 2, 6, 4, 10, 11, 15, 2]

function contarValores(n1, valorContar) {
    let quantasVzsApareceu = 0
    for (let c = 0; c <= n1.length-1; c++) {
        if (n1[c] === valorContar) {
            quantasVzsApareceu += 1
        }
    }
    return quantasVzsApareceu 
}

console.log(`O valor aparece ` + contarValores(a72, 2))

// Ex 73 — Remova os valores duplicados de um array
let a73 = [2, 4, 2, 6, 4, 2, 7, 2, 9, 4, 8, 2, 6, 4, 10, 11, 15, 2]
//         0  1  2  3  4  5  6  7  8  9  10 11 12 13 14  15  16  17  

function removeValoresDuplicados(n1) {
    let aLimpo = [n1[0]]
    for (let c = 0; c <= n1.length-1; c++) {
        let jaExite = false
        for (let i = 0; i <= aLimpo.length-1; i++) {
            if (aLimpo[i] === n1[c])
                jaExite = true;
        }
        if (!jaExite)
            aLimpo.push(n1[c])
    }
    return aLimpo
}

console.log(`Novo array sem valores duplicados ` + removeValoresDuplicados(a73))

// Ex 74 — Ordene um array sem utilizar sort
let numeros74 = [8, 3, 10, 1, 5, 2];

function OrdArray(n1) {
    let arr = [...n1]; 

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
            }
        }
    }
    return arr; 
}

console.log(`Array ordenado: ` + OrdArray(numeros74));

// Ex 75 — Encontre o segundo maior número de um array
let numeros75 = [10, 5, 30, 8, 20, 15, 35]

function segundoMaior(n1) {
    let maior75 = -Infinity
    let segMaior = -Infinity

    for (let c = 0; c < n1.length; c++) {
        let numAt = n1[c]
        if (numAt > maior75) {
            segMaior = maior75
            maior75 = numAt
        }
        else if (numAt > segMaior && numAt !== maior75) {
            segMaior = numAt
        }
    }

    if (segMaior === -Infinity) {
        return 'Não existe segundo maior número distinto'
    }

    return segMaior
}

console.log(`O segundo maior numero é: ${segundoMaior(numeros75)}`)

// 76 — Conte quantos caracteres existem em uma string.
//             123456 789
let conteQT = 'Carlos Pim'
//             0123456789

function contarCaracteres(n1) {
    let conCarac = 0
    for (let c = 0; c < n1.length; c++) {
        conCarac += 1
    }

    return conCarac
}

console.log(`O nome ${conteQT} tem ` + contarCaracteres(conteQT) + ` caracteres!`)

// Ex 77 — Conte quantas vogais existem em uma string.

let contarVogaisStrings = 'Carlos Pim'
let vog = [ 'a', 'e', 'i', 'o', 'u' ]

function contarVogais(n1, n2) {
    let contarVog = 0
    for (let c = 0; c < n1.length; c++) {
        for (let i = 0; i < n2.length; i++) {
            if (n2[i] === n1[c]) {
                contarVog++
                break
            }
        }
    }
    return contarVog
}

console.log(`Na palavra ${contarVogaisStrings} tem ` + contarVogais(contarVogaisStrings.toLocaleLowerCase(), vog) + ` vogais`)























