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
            index++
            console.log(`${index} Candidato: ${politicos.Nome} numero: ${politicos.Numero} votos totais: ${politicos.Votos}`)
        })
    } else {
        return console.log('Nenhum candidato cadastrado!')
    }
}

function calcularTotalVotos() {
    let totVotosGeral = 0
    candidatos.forEach((cand) => {
        totVotosGeral += cand.Votos
    })
    return(totVotosGeral)
}

function descobrirVencedor() {
    if (candidatos.length === 0)
        return console.log('Nenhum candidato cadastrado!')
    let vencedor = -1
    let quemVenceu = ''
    let empatou = [candidatos[0]]
    let segundoTurno = false
    let totVotos = calcularTotalVotos()
    let porcCandidato = 0
    let porcentagem = []

    candidatos.forEach((cand) => {
        porcCandidato = (cand.Votos / totVotos) * 100
        porcentagem.push({
            'Nome': cand.Nome,
            'NumeroCand': cand.Numero,
            'Porc': porcCandidato
        })
        if (porcCandidato >= 51) {
            return console.log(`Vitoria do candidato(a): ${cand.Nome}`)
        }
    })

}

/*
candidatos.forEach((cand) => {
        if (cand.Votos > vencedor) {
            vencedor = cand.Votos
            quemVenceu = cand.Nome
            empatou = [cand]
            segundoTurno = false
        } else if (cand.Votos === vencedor) {
            empatou.push({
            'Nome': cand.Nome,
            'Numero': cand.Numero,
            'Votos': cand.Votos})
            segundoTurno = true
        }
    })
    
    if (!segundoTurno) {
        console.log(`O vencedor foi ${quemVenceu} com ${vencedor} votos`)
    } else {
        console.log(`teremos segundo turno entre ${empatou[0].Nome} e ${empatou[1].Nome}`)
    }
*/

cadastrarCandidato('Ze', 1000)
cadastrarCandidato('Maria', 1000)
cadastrarCandidato('Valeria', 100)
cadastrarCandidato('Eduardo', 10)

registrarVoto(1000)
registrarVoto(100)
registrarVoto(100)
registrarVoto(100)
registrarVoto(100)
/*
registrarVoto(1000)
registrarVoto(1000)
registrarVoto(1000)
registrarVoto(1000)
registrarVoto(1000)
registrarVoto(1000)
registrarVoto(100)
registrarVoto(100)
registrarVoto(100)
registrarVoto(100)
registrarVoto(100)
registrarVoto(100)
registrarVoto(100)
registrarVoto(100)
registrarVoto(100)
registrarVoto(100)
registrarVoto(100)
registrarVoto(100)
registrarVoto(100)
registrarVoto(100)
registrarVoto(10)
registrarVoto(10)
registrarVoto(10)
registrarVoto(10)
registrarVoto(10)
registrarVoto(1111) */

listarResultados()

console.log( `O total de votos geral foi: ${calcularTotalVotos()}` )

descobrirVencedor()


