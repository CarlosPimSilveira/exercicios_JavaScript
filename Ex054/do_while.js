function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}
// gera um numero aleatorio entre 1 e 50. numero inteiro.
const min = 1
const max = 50
let rand = random(min, max)

//faça enquanto
//aqui caso o rand ja vier com numero 10 o codigo ainda vai entrar num loop alterando o numero 10 o que faria o numero 10 ter que aparecer uma segunda vez para entao parar o loop.
//pois primeiro ele execulta o codigo e depois verifica a condição!
do {
    rand = random(min, max)
    console.log(rand)
} while (rand !== 10);