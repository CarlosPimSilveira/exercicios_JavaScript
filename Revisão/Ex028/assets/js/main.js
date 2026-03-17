const data = new Date()

function criaP() {
    const p = document.createElement('p') // Cria uma tag p
    return p
}

function DiasemanaNum() {
switch (diaSemana) {
    case 0: 
        return diaSemanatexto = 'Domingo'   
    case 1: 
        return diaSemanatexto = 'Segunda'
    case 2: 
        return diaSemanatexto = 'Terça'
    case 3: 
        return diaSemanatexto = 'Quarta'
    case 4: 
        return diaSemanatexto = 'Quinta'
    case 5: 
        return diaSemanatexto = 'Sexta'
    case 6: 
        return diaSemanatexto = 'Sabado'
    default:
        diaSemana = ''
}
}

function resultado() {
    const resultado = document.querySelector('.container')
    const p = criaP()
    const diaSemana = DiasemanaNum(data.getDay())

    p.innerHTML = `${data.getDate()}/${data.getMonth()} ${diaSemana}`
    resultado.appendChild(p)
}

resultado()