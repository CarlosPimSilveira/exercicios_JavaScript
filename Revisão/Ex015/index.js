let a = [10, 400, 1051] // Array - Vetor
console.log(a[1])
console.log(a[2])
console.log(a[0])

let num = [5, 8, 2, 9, 3]
console.log(`Nosso vetor é o ${num}`)
num[5] = 6
console.log(`Nosso vetor é o ${num}`)
num.push(7) //aqui nao precisamos mostrar o ultimo lugar ele acha sozinho
console.log(`Nosso vetor é o ${num}`)
console.log(num.length) //Diz o tamanho do nosso array 5, 8, 2, 9, 3, 6, 7 = 0123456 = 7
num.sort() // Organiza em ordem crescente menor para maior
console.log(`Nosso vetor é o ${num}`) 
console.log(`O primeiro valor do vetor é ${num[0]}`)

for(n = 0; n < num.length; n++) {
    console.log(num[n])
}

console.log('For in')

for(let n in num) {
    console.log(num[n])
}

let pos = num.indexOf(4)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}