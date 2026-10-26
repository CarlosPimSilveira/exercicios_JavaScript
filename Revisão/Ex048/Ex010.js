// Sistema biblioteca!
let livros = []

function cadastrarLivro(titulo, autor, codigo) {
    if (String(titulo).trim() === "" || typeof titulo !== 'string' || String(autor).trim() === "" || typeof autor !== 'string')
        return console.log('Cadastro invalido! titulo ou autor errados!')

    if (codigo <= 0 || !Number.isInteger(codigo))
        return console.log('Quantidade invalida!')

    let codLivroIgual = false

    livros.forEach((livro) => {
        if (codigo === livro.Codigo) {
            codLivroIgual = true
        }
    }) 

    if (codLivroIgual)
        return console.log('Codigo do livro igual!')

    livros.push({
        Titulo: titulo,
        Autor: autor,
        Codigo: codigo,
        Disponivel: true
    })
}


cadastrarLivro('A voz do silêncio', 'yoshitoki oima', 12151)







