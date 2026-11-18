// Sistema de gestão de turma e boletim escolar
const Alunos = []
const Cursos = ['Frontend', 'Backend', 'FullStack', 'Dados']
let Id = 0

function validarNome(nome) {
    return typeof nome === 'string' && nome.trim() !== ""
}

function validarNota(Nota) {
    return (typeof Nota === 'number' && !Number.isNaN(Nota)) && Nota >= 0 && Nota <= 10
}

function validarCurso(crs) {
    if (typeof crs !== 'string' || crs.trim() === "")
        return

    let achouCurso = Cursos.some(curso => curso.toLowerCase() === crs.toLowerCase());

    if (!achouCurso) {
        console.log('Curso não encontrado!');
        return false;
    }

    return true;
}

function cadastrarAluno(nome, curso) {
    const valNome = validarNome(nome) 
    if (!validarCurso(curso)) {
        return
    }

    if (!valNome) {
        return console.log('Nome invalido!')
    }

    Id++

    Alunos.push({     
        Id: Id,
        Nome: nome,
        Cursos: curso,
        Notas: []
    })
}

function lançarNota(id, nota) {
    if (!validarNota(nota)) {
        return console.log('Nota invalida!')
    }

    const alunoEncontrado = Alunos.find(aluno => id === aluno.Id)
    if (!alunoEncontrado) 
        return console.log('ID não encontrado!')
    alunoEncontrado.Notas.push(nota)
}

function calcularMediaAluno(id) {
    const alunoEncontrado = Alunos.find(aluno => id === aluno.Id)
    if (!alunoEncontrado) 
        return console.log('ID não encontrado!')

    if (!alunoEncontrado.Notas || alunoEncontrado.Notas.length === 0) {
        return console.log('Aluno cadastrado está sem nota!');
    }

    let media = 0

    alunoEncontrado.Notas.forEach((med) => {
        media += med;
    });
    media = media / alunoEncontrado.Notas.length

    alunoEncontrado.Media = Number(media.toFixed(2))
}

function gerarBoletimTurma() {
    Alunos.forEach((aluno) => {
    calcularMediaAluno(aluno.Id)
        console.log(`O aluno: ${aluno.Nome} do curso ${aluno.Cursos} ficou com media: ${aluno.Media}`)
        if (aluno.Media >= 6) {
            console.log('Aluno aprovado!')
        } else if (aluno.Media >= 4 && aluno.Media <= 5.9) {
            console.log('Aluno de recuperação!')
        } else {
            console.log('Aluno reprovado!')
        }
    })
}

// Cadastro de alunos
cadastrarAluno('Carlos', 'FullStack')
cadastrarAluno('Eduardo', 'Backend')
cadastrarAluno('Jose', 'Backend')
cadastrarAluno('Mariana', 'FullStack')
cadastrarAluno('Ana', 'Frontend')
cadastrarAluno('Pedro', 'Backend')
cadastrarAluno('Lucas', 'Frontend')
cadastrarAluno('Fernanda', 'FullStack')

// Lançamento de notas
lançarNota(1, 8)
lançarNota(1, 7)
lançarNota(1, 6)
lançarNota(2, 6)
lançarNota(2, 9)
lançarNota(2, 10)
lançarNota(3, 5)
lançarNota(3, 8)
lançarNota(3, 4)
lançarNota(4, 10)
lançarNota(4, 9)
lançarNota(4, 7)
lançarNota(5, 7)
lançarNota(5, 8)
lançarNota(5, 8)
lançarNota(6, 4)
lançarNota(6, 6)
lançarNota(6, 7)
lançarNota(7, 9)
lançarNota(7, 10)
lançarNota(7, 7)
lançarNota(8, 6)
lançarNota(8, 8)
lançarNota(8, 10)

gerarBoletimTurma()

//console.log(Alunos)
