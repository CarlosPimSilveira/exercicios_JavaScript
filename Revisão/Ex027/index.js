const data = new Date()
const diaSemana = data.getDay()
let diaSemanatexto

switch (diaSemana) {
    case 0: 
        diaSemanatexto = 'Domingo'
        break   
    case 1: 
        diaSemanatexto = 'Segunda'
        break
    case 2: 
        diaSemanatexto = 'Terça'
        break
    case 3: 
        diaSemanatexto = 'Quarta'
        break
    case 4: 
        diaSemanatexto = 'Quinta'
        break
    case 5: 
        diaSemanatexto = 'Sexta'
        break
    case 6: 
        diaSemanatexto = 'Sabado'
        break
}

console.log(diaSemanatexto)