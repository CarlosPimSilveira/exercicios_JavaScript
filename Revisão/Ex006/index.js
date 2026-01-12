let nome
let sobreNome
let idade
let peso
let alturaEmCm
let imc // peso / (altura * altura)
let anoNascimento
let anoAtual = 2026

nome = window.prompt('Digite seu nome: ')
sobreNome = window.prompt('Digite seu sobrenome: ')
idade = window.prompt('Digite sua idade: ')
peso = window.prompt('Digite seu peso: ')
alturaEmCm = window.prompt('Digite sua altura em cm: ')


imc = peso / ( alturaEmCm * alturaEmCm)
anoNascimento = anoAtual - idade

window.confirm(nome + ' ' + sobreNome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg tem ' + alturaEmCm + ' de altura e seu IMC é de ' + imc )
window.confirm(nome + ' ' + sobreNome + ' nasceu em ' + anoNascimento)
