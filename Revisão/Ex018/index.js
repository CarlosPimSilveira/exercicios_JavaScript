function contar(n) {
    for (let c = 1; c <= n; c++) {
        console.log(`Passou: ${c}`)
    }
    cortar('carlos')
    return 'Fim da contagem'
}

function cortar(p) {
    for (let c = 0; c < p.length; c++) {
        console.log(p[c])
    }
    contarAte(5)
}

function contarAte(n) {
    for(let c = 1; c <= n; c++) {
        console.log(c)
    }
    contarVogais('CARLOS')
    return console.log('Fim')
}

function contarVogais(p) {
    p = p.toLowerCase()
    const vog = ['a', 'e', 'i', 'o', 'u']
    //            0    1    2    3    4
    let cont = 0
    for(let c = 0; c < p.length; c++) {
        if (vog.includes(p[c])) {
            cont++
        }
    }
    console.log(`Total de vogais: ${cont}`)
}

console.log(contar(10))