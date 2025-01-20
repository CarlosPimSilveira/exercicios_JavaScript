const h1 = document.querySelector('.container h1')
const data = new Date()
h1.innerHTML = data.toString()

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto
        case 1:
            diaSemanaTexto = 'Segunda-feira'
            return diaSemanaTexto
        case 2:
            diaSemanaTexto = 'Terça-feira'
            return diaSemanaTexto
        case 3:
            diaSemanaTexto = 'Quarta-feira'
            return diaSemanaTexto
        case 4:
            diaSemanaTexto = 'Quinta-feira'
            return diaSemanaTexto
        case 5:
            diaSemanaTexto = 'Sexta-feira'
            return diaSemanaTexto
        case 6:
            diaSemanaTexto = 'Sábado-feira'
            return diaSemanaTexto
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto
    }
}

function getNomeMes(numeroMes) {
    let NomeMes;

    switch (numeroMes) {
        case 0:
            NomeMes = 'Janeiro'
            return NomeMes
        case 1:
            NomeMes = 'Fevereiro'
            return NomeMes
        case 2:
            NomeMes = 'Março'
            return NomeMes
        case 3:
            NomeMes = 'Abril'
            return NomeMes
        case 4:
            NomeMes = 'Maio'
            return NomeMes
        case 5:
            NomeMes = 'Junho'
            return NomeMes
        case 6:
            NomeMes = 'Julho'
            return NomeMes
        case 7:
            NomeMes = 'Agosto'
            return NomeMes
        case 8:
            NomeMes = 'Setembro'
            return NomeMes
        case 9:
            NomeMes = 'Outubro'
            return NomeMes
        case 10:
            NomeMes = 'Novembro'
            return NomeMes
        case 11:
            NomeMes = 'Dezembro'
            return NomeMes
    }
}

function criaData(data) {
    const diaSemana = data.getDay()
    const numeroMes = data.getMonth()

    const nomeDia = getDiaSemanaTexto(diaSemana)
    const nomeMes = getNomeMes(numeroMes)

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()} ` + 
        `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}` 
    )
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

h1.innerHTML = criaData(data);