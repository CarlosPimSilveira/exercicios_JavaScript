// Sistema de gestão de turma e boletim escolar
const Alunos = []
const Cursos = ['Frontend', 'Backend', 'FullStack', 'Dados']
let Id = 0

function validarNome(nome) {
    return typeof nome === 'string' && nome.trim() !== ""
}

function validarNota(Nota) {
    return typeof Nota === 'number' && !Number.isNaN(Nota) && !Nota >= 0
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

    const alunoEncontrado = Alunos.find(aluno => id === aluno.id);
    console.log(alunoEncontrado)
}

cadastrarAluno('carlos', 'FullStack')
cadastrarAluno('Eduardo', 'Backend')
cadastrarAluno('Jose', 'Backend')

lançarNota(1, 5)


