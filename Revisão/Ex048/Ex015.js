const numeros = [2, 5, 8, 12, 16, 23, 38, 56, 72, 90]
const alvo = 23

let inicio = 0
let fim = numeros.length - 1

while (inicio <= fim) {

    let meio = Math.floor((inicio + fim) / 2)

    if (numeros[meio] === alvo) {
        return console.log(`A metade foi encontrada: ${alvo}`)
    } else if (numeros[meio] < alvo) {
        inicio = meio+1
    } else {
        fim = meio-1
    }
}






