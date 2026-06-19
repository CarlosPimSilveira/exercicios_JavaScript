// Valor por referência
//                 0         1        2         3          4 
const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana']
const novo = nomes.slice(1, 3) // "fatia" o array começa na maria e vai ate joana!
const novo1 = nomes.slice(1, -1)
console.log(nomes)
console.log(novo)
console.log(novo1)

const nome = 'Luiz Otávio Miranda'
const nomes1 = nome.split(' ') // separando para fazer um array usando o espaço para separar!
console.log(nomes1)
