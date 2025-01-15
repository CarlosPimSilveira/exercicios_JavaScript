const data = new Date('2019-04-20 20:15:59')

console.log('Dia', data.getDate()); //obtendo o numero do dia
console.log('Mês', data.getMonth() + 1); //mes começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); //numero do dia da semana | 0 - domingo - 6 sabado
console.log(Date.now()) // data em milesimos de segundo
