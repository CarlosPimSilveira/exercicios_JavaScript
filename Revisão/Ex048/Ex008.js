// Sistema de votação

let candidatos = []

function cadastrarCandidato(nome, numero) {
    if (nome !== '' && numero > 0 && Number.isInteger(numero)) {
        candidatos.push({
            'Nome': nome,
            'Numero': numero,
            'Votos': 0
        })
    } else {
        return console.log('Nome invalido! ou numero invalido!')
    }
}

cadastrarCandidato('Ze', 1000)

console.log(candidatos)

