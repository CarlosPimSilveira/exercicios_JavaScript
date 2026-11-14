// Sistema de gestão de turma e boletim escolar
const alunos = []
const cursos = ['Frontend', 'Backend', 'FullStack', 'Dados']

function validarNome(nome) {
    return typeof nome === 'string' && nome.trim() !== ""
}

function validarCurso(crs) {
    let achouCurso = cursos.some(curso => curso.toLowerCase() === crs.toLowerCase());

    if (!achouCurso) {
        console.log('Curso não encontrado!');
        return false;
    }

    return true;
}

function cadastrarAluno(nome, curso) {
    const valNome = validarNome(nome) 
    const valCurso = validarCurso(curso)

    if (!valNome) {
        return console.log('Nome invalido!')
    }
}

cadastrarAluno('carlos', 'teste')





