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
