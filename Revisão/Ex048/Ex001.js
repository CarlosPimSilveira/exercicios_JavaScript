const n1 = 10
const n2 = 20
const n3 = 15
const media = (n1 + n2 + n3) / 3
console.log(media)
//
const metros = 20
const centímetros = metros * 100
console.log(`temos ${metros} metros ou então ${centímetros}`)
//
const tempCel = 32
const respTemp = (tempCel * 9/5) + 32
console.log(`A temperatura em Fahrenheit é de ${respTemp}`)
//
const NumEx5 = 20
console.log(`O numero ${NumEx5} tem como dobro ${NumEx5*2}, o triplo como ${NumEx5*3} e a metade de ${NumEx5} é ${NumEx5/2}`)
// Ex 06 - Calcule a área de um retângulo.
const base = 3
const altura = 6
const Area = base * altura
console.log(`A Área do retângulo é de ${Area}`)
// Ex 07 - Calcule a área de um círculo. 
const raio = 5
const area = Math.PI * raio ** 2
console.log(`A área do círculo é ${area}`)
// Ex 08 - Calcule o perímetro de um quadrado.
const LadoQuadrado = 4
const respQuadrado = 4 * LadoQuadrado
console.log(`O périmetro do quadrado é ${respQuadrado}`)
// Ex 09 - Calcule o preço final de um produto com 10% de desconto.
let ProdDesc = 19.99
let DescontoProduto = 12
let RespDesc = ProdDesc * (1 - DescontoProduto / 100)
console.log(`O produto era ${ProdDesc} com desconto de ${DescontoProduto}% ficou ${RespDesc.toFixed(2)}`) 
// Ex 10 - Calcule o salário após um aumento de 15%.
let Salario = 1550
let aumentoSalario = 15
let RespAumento = Salario * (1 + aumentoSalario / 100)
console.log(`O aumento de salario de ${aumentoSalario}% é ${RespAumento.toFixed(2)}`)
// Ex 11 - Converta horas, minutos e segundos para segundos.
const horas = 1
const minutos = 35
const segundos = 15
const horasSegundos = horas * 60 * 60; 
const minutosSegundos = minutos * 60;

const totalSegundos = horasSegundos + minutosSegundos + segundos;

console.log(`A conversão de horas, minutos e segundos da ${totalSegundos}`); // Vai resultar em 5715
// Ex 12 - Dado um número de segundos, transforme em horas, minutos e segundos.
const totalSegundos12 = 5715;
const horas12 = Math.floor(totalSegundos12 / 3600);
const segundosRestantes = totalSegundos12 % 3600;
const minutos12 = Math.floor(segundosRestantes / 60);
const segundos12 = segundosRestantes % 60;

console.log(`${horas12}:${minutos12}:${segundos12}`); 

// Ex 13 - Troque o valor de duas variáveis.
let A = 10
let B = 5
let C = B
B = A
A = C
console.log(A + ' - ' + B)

// Ex 14 - Calcule quanto uma pessoa gastou em uma compra com vários produtos.
let Pa = 10
let Pb = 15
let Pc = 5
let Pd = 20
let Pe = 25
let Pf = 100
let pResultado = Pa + Pb + Pc + Pd + Pe + Pf
console.log(pResultado)
const desconto = 12
// Adicionado o desconto
pResultado = pResultado * (1 - desconto / 100)
console.log(`Valor com desconto: R$ ${pResultado.toFixed(2)}`)

// Ex 15 - Calcule o IMC a partir de peso e altura.
const peso15 = 125
const altura15 = 1.80
const imc = peso15 / (altura15 * altura15)
console.log(`Seu imc é de: ${imc.toFixed(2)}`)