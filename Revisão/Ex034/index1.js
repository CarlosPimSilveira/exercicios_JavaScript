function funcao() {
    console.log('Oie')
    console.log(arguments)
    let total = 0
    for (let argumento of argument) {
        total += argumento
    }
    console.log(total)
}
// enviando argumento! mesmo a funcao nao esperando ele nao retorna erro!
// quando defino uma function com a palavra function dentro dela tem a arguments que sustenta tudo que for enviado 
funcao('valor', 1, 2, 3, 4, 5, 6, 7, 8, 9)