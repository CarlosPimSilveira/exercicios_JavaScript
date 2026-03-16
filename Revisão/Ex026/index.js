const tresHoras = 60 * 60 * 3 * 1000 
const umDia = 60 * 60 * 24 * 1000
const data = new Date(0 + tresHoras + umDia)

console.log(data.toString())
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth())
console.log('Ano', data.getUTCFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getDate())
console.log('Seg', data.getDate())
console.log('ms', data.getDate())
console.log('Dia semana', data.getDate())
