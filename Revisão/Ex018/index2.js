function contarReverso(n) {
    for (let c = n; c >= 0; c--) {
        console.log(c)
    }
} contarReverso(5)

function somarAte(n) {
    let res = 0
    for (let c = 1; c <= n; c++) {
        res += c
    }
    return res
} console.log(somarAte(5))

function somarParesAte(n) {
    let res = 0
    for (let c = 1; c <= n; c++) {
        if (c%2 == 0) {
            res += c
        }
    }
    return res
} console.log(somarParesAte(10))

function contarConsoantes(p) {
    p = p.toLowerCase()
    const vog = ['a', 'e', 'i', 'o', 'u']
    let cont = 0
        for(let c = 0; c < p.length; c++) {
        if (!vog.includes(p[c]) && p[c] !== ' ') { 
            cont++
        }
    }
    console.log(`Total de consoantes: ${cont}`)
} contarConsoantes('Carlos teste teste')

let n = [3, 10, 7, 22, 1] //nao pode usar math.max
function maiorNumero(n) {

} maiorNumero(n)