const numeros = [2, 5, 8, 12, 16, 23, 38, 56, 72, 90]
// quero achar o 23 com lista binaria!
let contador = 0
let meio = Math.floor((numeros[0] + numeros.length-1) / 2)

while(contador <= numeros.length) {
    if (meio === numeros[contador]) {
        return console.log(`O meio é: ${numeros[meio]}`)
    }
    contador++
} 







