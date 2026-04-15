const nome = 'Luiz'
let controle = 0

while (controle < nome.length) {
    console.log(nome[controle])
    controle++
}

console.log('####')
controle = 0

while (controle <= 10) {
    console.log(controle)
    controle++
}

console.log('Segue a vida...')
console.log('####')

// Gera numero aleatorio
function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
    // Pegando "inteiro"
}

const min = 1
const max = 50
let rand = random(min, max)

// Enquanto o numero NÃO for 10 continue
// Se for diferente de 10 entra no loop
while (rand !== 10) {
    rand = random(min, max)
    console.log(rand)
}

