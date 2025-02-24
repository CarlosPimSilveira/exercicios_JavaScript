function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}
// gera um numero aleatorio entre 1 e 50. numero inteiro.
const min = 1
const max = 50
let rand = random(min, max)

//enquanto!
//ja aqui caso o 10 vier de primeira o loop nao vai ser execultado.
while (rand !== 10) {
    rand = random(min, max)
    console.log(rand)
}