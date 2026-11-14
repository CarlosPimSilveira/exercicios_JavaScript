// Sistema de gestão de turma e boletim escolar
const alunos = []
const cursos = ['Frontend', 'Backend', 'FullStack','Dados']

function validarNome(nome) {
    return typeof desc === 'string' && desc.trim() !== ""
}

function validarCurso(crs) {
    let achouCurso = false

    cursos.forEach((est) => {
        if (est === crs) {
            achouCurso = true
        }
    })

    if (!achouCurso) {
        return console.log('Curso não encontrado!')
    }
}





