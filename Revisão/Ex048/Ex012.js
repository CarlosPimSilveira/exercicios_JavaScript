// Ex Crie um jogo de pedra, papel e tesoura.
const opcoes = ['Pedra', 'Papel', 'Tesoura']

let escolhadoJogador = 'pedra'
let escolhaMquina = geraEscolhaComputador()

veificaEscolhaJogador(escolhadoJogador)

function geraEscolhaComputador() {
    return opcoes[Math.floor(Math.random() * opcoes.length)];
}

function veificaEscolhaJogador(esqJogador) {
    const escolhaErrada = false

    opcoes.forEach((op) => {
        
    })
}







