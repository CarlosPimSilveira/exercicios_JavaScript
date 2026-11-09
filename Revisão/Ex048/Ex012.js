// Ex Crie um jogo de pedra, papel e tesoura.
const opcoes = ['Pedra', 'Papel', 'Tesoura']

let escolhadoJogador = 'pedra'
let escolhaMaquina = geraEscolhaComputador()
let escolhasVerificadas = veificaEscolhaJogador(escolhadoJogador)

if (escolhasVerificadas) {
    realizaJogada(escolhaMaquina, escolhadoJogador)
}

function realizaJogada(esqMaquina, esqJogador) {
    if (esqJogador.toLowerCase() === esqMaquina.toLowerCase()) {
        return console.log('Houve empate!')
    } else if (esqJogador.toLowerCase() === 'pedra' && esqMaquina.toLowerCase() === 'tesoura' ) {
        return console.log(`Jogador venceu! usando ${esqJogador}`)
    } else if (esqJogador.toLowerCase() === 'papel' && esqMaquina.toLowerCase() === 'pedra') {
        return console.log(`Jogador venceu! usando ${esqJogador}`)
    } else if (esqJogador.toLowerCase() === 'tesoura' && esqMaquina.toLowerCase() === 'papel') {
        return console.log(`Jogador venceu! usando ${esqJogador}`)
    } else {
        return console.log(`A maquina venceu! usando ${esqMaquina}`)
    }
}

function geraEscolhaComputador() {
    return opcoes[Math.floor(Math.random() * opcoes.length)];
}

function veificaEscolhaJogador(esqJogador) {
    if (typeof esqJogador !== 'string' || esqJogador.trim().length === 0) {
        return console.log('Erro nenhuma escolha feita!')
    } 

    const op = opcoes.map((opcao) => { 
        return opcao.toLocaleLowerCase()
    })

    let escolhaErrada = op.includes(esqJogador.toLowerCase(), 0)

    if (!escolhaErrada) {
        return console.log(`Escolha errada! opções do jogo 1:${opcoes[0]}, 2:${opcoes[1]} e 3:${opcoes[1]}`)
    } else {
        return true
    }
}







