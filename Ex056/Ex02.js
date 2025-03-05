// Escreva uma função chamada ePaisagem que
// receba dois argumentos, largura e altura
// de uma imagem (number)
// retorne true se a imagem estiver no modo paissagem.

// nesse caso podemos remover o (? 'Imagem em paissagem ' : 'imagem em retrato') pois ao faze a verificação das variaveis ja teremos o retorno.

//function ePaisagem(largura, altura) {
    //return largura > altura
//}
//arrow function!
const ePaisagem = (largura, altura) => largura > altura 

console.log(ePaisagem(500, 400))