const nome = 'Carlos'
const sobrenome = 'Pim'
const idade = 25
const peso = 120
const alturaEmM = 1.81
let imc
let anoNascimento

imc = peso / (alturaEmM * alturaEmM)
anoNascimento = 2024 - idade

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg')
console.log('tem', alturaEmM, 'de altura e seu IMC é de', imc)
console.log(nome, 'nasceu em', anoNascimento, '.')