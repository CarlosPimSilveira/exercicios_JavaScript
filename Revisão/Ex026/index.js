const tresHoras = 60 * 60 * 3 * 1000 
const umDia = 60 * 60 * 24 * 1000
const data = new Date(0 + tresHoras + umDia)

console.log(data.toString())
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth())
console.log('Ano', data.getUTCFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia semana', data.getDay())

function zeroAEsquerda(num) {
    return num >= 10? num : `0${num}`
}

function formatadaData(data1) {
    const dia = zeroAEsquerda(data1.getDate())
    const mes = zeroAEsquerda(data1.getMonth() + 1)
    const ano = zeroAEsquerda(data1.getUTCFullYear())
    const hora = zeroAEsquerda(data1.getHours())
    const min = zeroAEsquerda(data1.getMinutes())
    const seg = zeroAEsquerda(data1.getSeconds())

    return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`
}

const data1 = new Date()
const dataBrasil = formatadaData(data1)
console.log(dataBrasil)
