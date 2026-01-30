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
//       0  1   2  3   4
function maiorNumero(n) {
    let m = n[0]
    for (let c = 0; c < n.length; c++) {
        if (n[c] > m) {
            m = n[c]
        }
    }
    return m
} console.log(maiorNumero(n))

function contarLetra(p1, p2) {
    p1 = p1.toLowerCase()
    p2 = p2.toLowerCase()
    let cont = 0
    for (let c = 0; c < p1.length; c++) {
        if (p1[c] == p2) {
            cont++
        }
    }
    return cont
} console.log(contarLetra('Banana', 'a'))

function inverterTexto(p) {
    let pn = ''
    for (let c = p.length-1; c >= 0; c--) {
        pn += p[c]
    }
    return pn
} console.log(inverterTexto('informatica'))

function palindromo(t) {
    let pn = ''
    t = t.toLowerCase()
    for (let c = t.length-1; c >= 0; c--) {
        pn += t[c]
    }
    if (pn === t){
        return true
    } else {
        return false
    }
} console.log(palindromo('arara'))

let pessoa = {
    nome: 'Carlos',  
    idade: 27,
    fazerAniversario() {
        this.idade += 1
    }
}
pessoa.fazerAniversario()
console.log(pessoa.idade)

let aluno = {
    nome: 'Carlos',
    notas: [5, 7, 9, 10],

    media() {
        let soma = 0

        for (let c = 0; c < this.notas.length; c++) {
            soma += this.notas[c]
        }

        return soma / this.notas.length
    },

    situacao() {
        let med = this.media()
        return med >= 7 ? 'Aprovado!' : 'Reprovado!'
    }
}
console.log("Média:", aluno.media())
console.log("Situação:", aluno.situacao())
