// Sistema de gestão de turma e boletim escolar
const alunos = []
const cursos = ['Frontend', 'Backend', 'FullStack', 'Dados']

function validarNome(nome) {
    return typeof desc === 'string' && desc.trim() !== ""
}

function validarCurso(crs) {
    let achouCurso = cursos.some(curso => curso.toLowerCase() === crs.toLowerCase());

    if (!achouCurso) {
        console.log('Curso não encontrado!');
        return false;
    }

    return true;
}

validarCurso('FullStack')





