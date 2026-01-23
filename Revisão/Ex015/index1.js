let num = [5, 8, 2, 9, 3]
num.push(7)
num.push(6)
num.push(1)
num.sort()
let ter = num.indexOf(8)
ter = ter === -1 ? console.log('O valor não foi encontrado!'): console.log(`O valor está na posição ${ter}`)
console.log(`Nosso vetor é o ${num}`) 