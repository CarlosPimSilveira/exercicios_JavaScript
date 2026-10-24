// Sistema de votação

let candidatos = []
let candidatosSegundoTurno = []

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
    let totVotos = calcularTotalVotos()
    if (totVotos === 0)
        return console.log('Nenhum voto registrado!')
    let porcCandidato = 0
    let porcentagem = []

    candidatos.forEach((cand) => {
        porcCandidato = (cand.Votos / totVotos) * 100
        porcentagem.push({
            'Nome': cand.Nome,
            'NumeroCand': cand.Numero,
            'Porc': porcCandidato
        })
    })
    porcentagem.sort((a, b) => b.Porc - a.Porc)
    if (porcentagem[0].Porc >= 51) {
        return console.log(`Vitoria do candidato(a): ${porcentagem[0].Nome} com ${porcentagem[0].Porc}% dos votos!`)
    } else {
        if (candidatos.length >= 2) {
            console.log('Nenhum candidato alcançou 51% dos votos!')
            console.log('Segundo turno:')
            console.log(porcentagem[0].Nome + ' - ' + porcentagem[0].Porc + '%')
            console.log(porcentagem[1].Nome + ' - ' + porcentagem[1].Porc + '%')
            candidatosSegundoTurno.length = 0
            porcentagem.slice(0, 2).forEach((segundoTurno) => {
                candidatosSegundoTurno.push({
                    'Nome': segundoTurno.Nome,
                    'Numero': segundoTurno.NumeroCand,
                    'Votos' : 0
                })
            })
        } else {
            return console.log('Apenas 1 candidato cadastrado!')
        }
    }
}

function registrarVotoSegundoTurno(voto) {
    if (voto === undefined || voto === null || String(voto).trim() === "") {
        console.log("Erro: Nenhum voto foi informado.");
        return "Voto vazio!";
    }

    let CandNaoEncontrado = false
    candidatosSegundoTurno.forEach((votar) => {
        if (votar.Numero === voto) {
            CandNaoEncontrado = true
            votar.Votos++
        }
    })
    if (!CandNaoEncontrado)
        console.log('candidato não existe!')
}

function descobrirVencedorSegundoTurno() {
    if (candidatosSegundoTurno.length !== 2) {
        return console.log('Apenas 1 candidato cadastrado falha!')
    }

    let candVencedor = []

    candidatosSegundoTurno.forEach((cand) => {
        candVencedor.push({
            'Nome': cand.Nome,
            'NumeroCand': cand.Numero,
            'Votos': cand.Votos
        })
    })
    if (candVencedor[0].Votos === 0 && candVencedor[1].Votos === 0) {
        return console.log('Votos não registrados!')
    } else if (candVencedor[0].Votos === candVencedor[1].Votos) {
        return console.log('Empatou novamente!')
    }
    candVencedor.sort((a, b) => b.Votos - a.Votos)
    return console.log(`Vitoria do candidato(a): ${candVencedor[0].Nome} com ${candVencedor[0].Votos} votos!`)
}

cadastrarCandidato('Ze', 1000)
cadastrarCandidato('Maria', 1000)
cadastrarCandidato('Valeria', 100)
cadastrarCandidato('Eduardo', 10)

registrarVoto(100)
registrarVoto(100)
registrarVoto(100)
registrarVoto(10)
registrarVoto(10)
registrarVoto(1000)
registrarVoto(1000)
registrarVoto(1000)

listarResultados()

console.log( `O total de votos geral foi: ${calcularTotalVotos()}` )

descobrirVencedor()

registrarVotoSegundoTurno(1000)
registrarVotoSegundoTurno(1000)
registrarVotoSegundoTurno(100)

descobrirVencedorSegundoTurno()