for (let i = 0; i < 5; i++) {
    console.log(i)
}

let i = 0
while (i < 5) {
    console.log(i)
    i++
}

do {
    console.log(i)
    i++
} while (i < 5)

const numeros = [10, 20, 30]

for (let valor of numeros) {
    console.log(valor)
}

const pessoa = {
    nome: 'Carlos',
    idade: 25
}

for (let chave in pessoa) {
    console.log(chave)        // nome, idade
    console.log(pessoa[chave])
}
