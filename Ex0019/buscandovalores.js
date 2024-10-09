let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort()

let pos = num.indexOf(4)//estamos procurando um valor que nao existe no nosso vetor ai o resultado é -1
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 esta na posição ${pos}`)
}
