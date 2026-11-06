// Ex Crie um jogo de pedra, papel e tesoura.
const opcoes = ['Pedra', 'Papel', 'Tesoura']

let escolhadoJogador = 'pedra'
let escolhaMquina = geraEscolhaComputador()

veificaEscolhaJogador(escolhadoJogador)

function geraEscolhaComputador() {
    return opcoes[Math.floor(Math.random() * opcoes.length)];
}

function veificaEscolhaJogador(esqJogador) {
    if (typeof esqJogador !== 'string' || esqJogador.trim().length === 0) {
        return console.log('Erro nenhuma escolha feita!')
    }

    let escolhaErrada = false

    opcoes.forEach((op) => {
        if (op.toLowerCase() === esqJogador.toLowerCase()) {
            escolhaErrada = true
        }
    })

    if (!escolhaErrada) {
        return console.log(`Escolha errada! opções do jogo 1:${opcoes[0]}, 2:${opcoes[1]} e 3:${opcoes[1]}`)
    }
}







