// Ex Crie um jogo de pedra, papel e tesoura.
const opcoes = ['Pedra', 'Papel', 'Tesoura']

let escolhadoJogador = 'pedra'
let escolhaMaquina = geraEscolhaComputador()
let escolhasVerificadas = veificaEscolhaJogador(escolhadoJogador)

if (escolhasVerificadas) {
    realizaJogada(escolhaMaquina, escolhadoJogador)
}

function realizaJogada(esqMaquina, esqJogador) {
    
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







