// Escreva uma função que receba 2 números e retorne o maior deles.
/*
const n1 = 15
const n2 = 10*/

function nMaior(n1, n2) {
    return n1 > n2 ? 'N1 é maior que N2' : 'N2 é maior que N1'    
}

console.log(nMaior(15, 10))

//

//function normal mas poderia ter uma operação ternaria
function max(x, y) {
    if (x > y) return x
    return y

}

//uma arrow function em js
const max2 = (x, y) => x > y ? x : y

console.log(max(1, 2))