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
    livros.forEach((livro, ind) => {
        if (codigo === livro.Codigo) {
            livroAchado = true
            indice = ind
        }
    })
    if (livroAchado === false) {
        return console.log('Livro não achado ou não cadastrado!')
    } else if (livros[indice].Disponivel) {
        livros[indice].Disponivel = false
        return console.log('Realizado emprestimo do livro!')
    } else {
        return console.log('Livro emprestado!')
    }
}

function devolverLivro(codigo) {
    if (codigo <= 0 || !Number.isInteger(codigo))
        return console.log('Codigo invalido!')

    let indice = 0
    livros.forEach((livro, ind) => {
        if (codigo === livro.Codigo) {
            indice = ind
        }
    })

    if (livros[indice].Disponivel === true) {
        return console.log('Livro ja havia sido devolvido!')
    } else {
        livros[indice].Disponivel = true
        return console.log('Devolução completa!')
    }
}

cadastrarLivro('A voz do silêncio', 'yoshitoki oima', 12151)
cadastrarLivro('Dom Casmurro', 'Machado de Assis', 101);
cadastrarLivro('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 102);
cadastrarLivro('1984', 'George Orwell', 103);
cadastrarLivro('A Revolução dos Bichos', 'George Orwell', 104);
cadastrarLivro('O Hobbit', 'J. R. R. Tolkien', 105);

emprestarLivro(103)
emprestarLivro(105)
emprestarLivro(104)

devolverLivro(105)





