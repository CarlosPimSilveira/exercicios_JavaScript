const data = new Date()

function criaP() {
    const p = document.createElement('p') // Cria uma tag p
    return p
}

function DiasemanaNum(diaSemana) {
    switch (diaSemana) {
        case 0: 
            return 'Domingo'   
        case 1: 
            return 'Segunda-feira'
        case 2: 
            return 'Terça-feira'
        case 3: 
            return 'Quarta-feira'
        case 4: 
            return 'Quinta-feira'
        case 5: 
            return 'Sexta-feira'
        case 6: 
            return 'Sabado'
        default:
            return ''
    }
}

function MesNum(mes) {
    switch (mes) {
        case 0: 
            return 'Janeiro'
        case 1: 
            return 'Fevereiro'
        case 2: 
            return 'Março'
        case 3: 
            return 'Abril'
        case 4: 
            return 'Maio'
        case 5: 
            return 'Junho'
        case 6: 
            return 'Julho'
        case 7: 
            return 'Agosto'
        case 8: 
            return 'Setembro'
        case 9: 
            return 'Outubro'
        case 10: 
            return 'Novembro'
        case 11: 
            return 'Dezembro'
        default: 
            return ''
    }
}

function resultado() {
    const resultado = document.querySelector('.container')
    const p = criaP()
    p.classList.add('paragrafo-resultado')
    const diaSemana = DiasemanaNum(data.getDay())
    const mes = MesNum(data.getMonth())

    p.innerHTML = `${diaSemana}, ${data.getDate()} de ${mes} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
    resultado.appendChild(p)
}

resultado()