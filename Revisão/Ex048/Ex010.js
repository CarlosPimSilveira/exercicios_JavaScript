// Sistema biblioteca!
let livros = []

function verificarLivros(codigo) {
    const livroEncontrado = livros.find(livro => codigo === livro.Codigo);
    
    return {
        existe: livroEncontrado !== undefined,
        livro: livroEncontrado          
    };
}

function confereCodigo(codigo) {
    return (codigo <= 0 || !Number.isInteger(codigo))
} 

function cadastrarLivro(titulo, autor, codigo) {
    if (typeof titulo !== 'string' ||  String(titulo).trim() === "" || 
        typeof autor !== 'string' || String(autor).trim() === "")
        return console.log('Cadastro invalido! titulo ou autor errados!')

    if (codigo <= 0 || !Number.isInteger(codigo))
        return console.log('Codigo invalido!')

    if (verificarLivros(codigo).existe)
        return console.log('Codigo do livro igual!')

    livros.push({
        Titulo: titulo,
        Autor: autor,
        Codigo: codigo,
        Disponivel: true
    })
}

function emprestarLivro(codigo) {
    if (confereCodigo(codigo) === true)
        return console.log('Codigo invalido!')

    const livroAchado = verificarLivros(codigo)

    if (livroAchado.existe === false) {
        return console.log('Livro não achado ou não cadastrado!')
    } 

    if (livroAchado.livro.Disponivel) {
        livroAchado.livro.Disponivel = false
        return console.log('Realizado emprestimo do livro!')
    } else {
        return console.log('Livro emprestado!')
    }
}

function devolverLivro(codigo) {
    if (confereCodigo(codigo) === true)
        return console.log('Codigo invalido!')

    const livroAchado = verificarLivros(codigo)

    if (livroAchado.existe === false) {
        return console.log('Livro não cadastrado no sistema')
    }

    if (livroAchado.livro.Disponivel === true) {
        return console.log('Livro ja havia sido devolvido!')
    } else {
        livroAchado.livro.Disponivel = true
        return console.log('Devolução completa!')
    }
}

function listarLivros() {
    let livrosListar = ''
    if (livros.length === 0) 
        return console.log('Nenhum livro cadastrado')
    
    livros.forEach((livro) => {
        livrosListar += `Titulo: ${livro.Titulo} autor: ${livro.Autor} Cod. livro: ${livro.Codigo} Disponivel: ${livro.Disponivel ? 'Sim' : 'Não'} \n`
    })

    return console.log(livrosListar)
}

function consultarDisponibilidade(codigo) {
    if (livros.length === 0) 
        return console.log('Nenhum livro cadastrado')

    if (confereCodigo(codigo) === true)
        return console.log('Codigo invalido!')

    const livroAchado = verificarLivros(codigo)

    if (livroAchado.existe) {
        const livro = livroAchado.livro 

        if (livro.Disponivel) {
            return console.log(`O livro: ${livro.Titulo} esta disponivel!`)
        } else {
            return console.log(`O livro: ${livro.Titulo} esta emprestado`)
        }
    } else {
        return console.log('Livro com codigo não cadastrado!')
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

listarLivros()

consultarDisponibilidade(105)
consultarDisponibilidade(104)



emprestarLivro(-10)
devolverLivro(0)
consultarDisponibilidade(2.5)
emprestarLivro(999)

