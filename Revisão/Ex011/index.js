var idade = 67
if (idade < 16) {
    console.log('Não vota!')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório!')
}

var agora = new Date()       //pegando hora atual do sistema  
var hora = agora.getHours() 
console.log(`agora são extamente ${hora} horas.`)

if (hora < 5) {
    console.log(`Boa madrugada!`)
} else if (hora < 12) {
    console.log(`Bom dia!`)
} else if (hora == 12) {
    console.log(`Boa almoço!`)
} else if (hora < 18) {
    console.log(`Boa tarde`)
} else {
    console.log(`Boa noite!`)
}

var agora = new Date()
var diaSem = agora.getDay() //paga pegar o dia da semana!

/* 
   0 = Domingo
   1 = Segunda
   2 = Terça
   3 = Quarta
   4 = Quinta
   5 = Sexta
   6 = Sábado
*/
//console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
}