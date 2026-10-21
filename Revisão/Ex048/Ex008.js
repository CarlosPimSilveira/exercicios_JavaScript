// Sistema de votação

let candidatos = []

function cadastrarCandidato(nome, numero) {
    if (nome !== '' && numero > 0 && Number.isInteger(numero)) {

    } else {
        return console.log('Nome invalido! ou numero invalido!')
    }
}

cadastrarCandidato('Ze', 1000)


