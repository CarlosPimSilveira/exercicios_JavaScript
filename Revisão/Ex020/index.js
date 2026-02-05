const alunos = ['Luiz', 'Maria', 'João', 'Carlos']
//               0       1        2       3

console.log(alunos.slice(0, 3)) // fiz um fatiamento o que nao puxa o carlos 
console.log(alunos instanceof Array) // retorna se é array

const removido = alunos.pop() //Remove o ultimo do array
console.log(removido)
alunos.shift() //Remove o primeiro  item do array

alunos[0] = 'Eduardo'
alunos.push('Otávio')
alunos.push('Luiza')
alunos.unshift('Larissa') // Adiciona como indicie inicial 0
console.log(alunos.length)

console.log(alunos[1])
console.log(alunos)


