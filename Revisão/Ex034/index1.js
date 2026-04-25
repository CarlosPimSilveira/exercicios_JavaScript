function funcao() {
    console.log('Oie')
    console.log(arguments)
    let total = 0;
    for (let argumento of arguments) {
        total += argumento
    }
    console.log(total)
}
// enviando argumento! mesmo a funcao nao esperando ele nao retorna erro!
// quando defino uma function com a palavra function dentro dela tem a arguments que sustenta tudo que for enviado 'valor', 
funcao(1, 2, 3, 4, 5, 6, 7)