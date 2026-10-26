// Sistema biblioteca!
let livros = []

function cadastrarLivro(titulo, autor, codigo) {
    if (typeof titulo !== 'string' ||  String(titulo).trim() === "" || 
        typeof autor !== 'string' || String(autor).trim() === "")
        return console.log('Cadastro invalido! titulo ou autor errados!')

    if (codigo <= 0 || !Number.isInteger(codigo))
        return console.log('Codigo invalido!')

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

function emprestarLivro(codigo) {
    if (codigo <= 0 || !Number.isInteger(codigo))
        return console.log('Codigo invalido!')

    let livroAchado = false
    let indice = 0
    livros.forEach((livro) => {
        if (codigo === livro.Codigo) {
            livroAchado = true
            indice++
        }
    })
    if (livroAchado === false) {
        return console.log('Livro não achado ou não cadastrado!')
    } 
    if (livroAchado && livros[indice].Disponivel) {
        livros[indice].Disponivel = false
        return console.log('Livro pode ser emprestado!')
    } 
    if (livroAchado && livros[indice].Disponivel === false) {
        return console.log('Livro ja emprestado!')
    }

}


cadastrarLivro('A voz do silêncio', 'yoshitoki oima', 12151)
cadastrarLivro('Dom Casmurro', 'Machado de Assis', 101);
cadastrarLivro('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 102);
cadastrarLivro('1984', 'George Orwell', 103);
cadastrarLivro('A Revolução dos Bichos', 'George Orwell', 104);
cadastrarLivro('O Hobbit', 'J. R. R. Tolkien', 105);

emprestarLivro(103)





