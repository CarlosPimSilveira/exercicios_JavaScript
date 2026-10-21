// Sistema de votação

let candidatos = []

function cadastrarCandidato(nome, numero) {
    let numRepetido = false

    if (nome.trim() !== '' && numero > 0 && Number.isInteger(numero)) {
        candidatos.forEach((cadCandidato) => {
            if (cadCandidato.Numero === numero)
                numRepetido = true;
        })
        if (numRepetido) 
            return console.log('Candidato com numero igual')
        candidatos.push({
            'Nome': nome,
            'Numero': numero,
            'Votos': 0
        })
    } else {
        return console.log('Nome invalido! ou numero invalido!')
    }
}

function registrarVoto(voto) {
    let CandNaoEncontrado = false
    candidatos.forEach((votar) => {
        if (votar.Numero === voto) {
            CandNaoEncontrado = true
            votar.Votos++
        }
    })
    if (!CandNaoEncontrado)
        console.log('candidato não existe!')
}

function listarResultados() {
    if (candidatos.length !== 0) {
        candidatos.forEach((politicos, index) => {
            console.log(`${index} Candidato: ${politicos.Nome} numero: ${politicos.Numero} votos totais: ${politicos.Votos}`)
            index++
        })
    } else {
        return console.log('Nenhum candidato cadastrado!')
    }
}

cadastrarCandidato('Ze', 1000)
cadastrarCandidato('Maria', 1000)
cadastrarCandidato('Valeria', 100)
cadastrarCandidato('Eduardo', 10)

registrarVoto(1000)
registrarVoto(1111)

listarResultados()
