function analisarNome(n) {
    n = n.toLowerCase()

    const vogais = ['a', 'e', 'i', 'o', 'u']
    let cont = 0

    // contar vogais
    for (let c = 0; c < n.length; c++) {
        if (vogais.includes(n[c])) {
            cont++
        }
    }

    // inverter texto
    let inv = ''
    for (let c = n.length - 1; c >= 0; c--) {
        inv += n[c]
    }

    console.log('Tamanho: ' + n.length)
    console.log('Vogais: ' + cont)
    console.log('Invertido: ' + inv)
}

analisarNome('Carlos Eduardo')
