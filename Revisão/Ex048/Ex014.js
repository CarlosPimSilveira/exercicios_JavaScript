// Sistema de gestão de turma e boletim escolar
const Alunos = []
const Cursos = ['Frontend', 'Backend', 'FullStack', 'Dados']
let Id = 0

function validarNome(nome) {
    return typeof nome === 'string' && nome.trim() !== ""
}

function validarCurso(crs) {
    let achouCurso = Cursos.some(curso => curso.toLowerCase() === crs.toLowerCase());

    if (!achouCurso) {
        console.log('Curso não encontrado!');
        return false;
    }

    return true;
}

function cadastrarAluno(nome, curso) {
    const valNome = validarNome(nome) 
    validarCurso(curso)

    if (!valNome) {
        return console.log('Nome invalido!')
    }

    Id++

    Alunos.push({     
        Id: Id,
        Nome: nome,
        Cursos: curso,
        Notas: 0
    })
}

cadastrarAluno('carlos', 'FullStack')





