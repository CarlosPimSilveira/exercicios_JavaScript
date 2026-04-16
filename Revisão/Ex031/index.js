// Tratando e lançando erros
// try, catch, throw

try {
    console.log(naoExisto)
} catch(error) {
    console.log('Var não existe')
    //console.log(error)
}

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('x e y precisam ser números')
    }
    return x + y
}

try {
    console.log(soma(2, 'a'))
} catch(error) {
    //console.log(error)
    console.log('Erro chame o suporte')
}