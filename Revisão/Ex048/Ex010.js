// Sistema biblioteca!
let livros = []

function cadastrarLivro(titulo, autor, codigo) {
    if (String(titulo).trim() === "" || typeof titulo !== 'string' || String(autor).trim() === "" || typeof autor !== 'string')
        return console.log('Cadastro invalido! titulo ou autor errados!')

    if (codigo <= 0 || !Number.isInteger(codigo))
        return console.log('Quantidade invalida!')

    livros.forEach((livro) => {
        if (codigo === livro.Codigo) {
            return console.log('Codigo do livro igual!')
        }
    })
}

cadastrarLivro('A voz do silêncio', 'yoshitoki oima', 12151)






