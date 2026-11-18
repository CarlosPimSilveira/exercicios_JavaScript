const numeros = [
    2, 5, 8, 12, 16, 23, 27, 31, 35, 38,
    42, 45, 49, 53, 56, 60, 64, 68, 72, 76,
    80, 84, 88, 90, 94, 98, 102, 106, 110, 114,
    118, 122, 126, 130, 134, 138, 142, 146, 150, 154,
    158, 162, 166, 170, 174, 178, 182, 186, 190, 194,
    198, 202, 206, 210, 214, 218, 222, 226, 230, 234,
    238, 242, 246, 250, 254, 258, 262, 266, 270, 274,
    278, 282, 286, 290, 294, 298, 302, 306, 310, 314,
    318, 322, 326, 330, 334, 338, 342, 346, 350, 354,
    358, 362, 366, 370, 374, 378, 382, 386, 390, 394
]
const alvo = 390
let contador = 0
let inicio = 0
let fim = numeros.length - 1

while (inicio <= fim) {
    contador++
    let meio = Math.floor((inicio + fim) / 2)

    if (numeros[meio] === alvo) {
        console.log(`A metade foi encontrada: ${alvo}`)
        break
    } else if (numeros[meio] < alvo) {
        inicio = meio+1
    } else {
        fim = meio-1
    }
}
console.log(`Foram ${contador} passadas`)



