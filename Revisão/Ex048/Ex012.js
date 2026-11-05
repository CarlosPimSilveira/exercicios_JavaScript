// Ex Crie um jogo de pedra, papel e tesoura.
let escolhadoJogador = 'pedra'
let escolhaMquina = geraEscolhaComputador()

function geraEscolhaComputador() {
    return opcoes[Math.floor(Math.random() * opcoes.length)];
}









