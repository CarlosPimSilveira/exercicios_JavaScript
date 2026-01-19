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