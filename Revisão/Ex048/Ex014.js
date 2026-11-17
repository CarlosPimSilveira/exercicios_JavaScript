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

    let media = 0

    alunoEncontrado.Notas.forEach((med) => {
        media += med;
    });

    media = media / alunoEncontrado.Notas.length

    console.log(`O aluno: ${alunoEncontrado.Nome} do curso ${alunoEncontrado.Cursos} ficou com media: ${media.toFixed(2)}`)
    if (media >= 6) {
        console.log('Aluno aprovado!')
    } else if (media >= 4 && media <= 5) {
        console.log('Aluno de recuperação!')
    } else {
        console.log('Aluno reprovado!')
    }
}

cadastrarAluno('carlos', 'FullStack')
cadastrarAluno('Eduardo', 'Backend')
cadastrarAluno('Jose', 'Backend')

lançarNota(2, 2)
lançarNota(2, 4)
lançarNota(2, 6)

calcularMediaAluno(2)

//console.log(Alunos)
