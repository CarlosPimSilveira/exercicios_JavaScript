// Atribuição via desestruturação (Arrays)

let a = 'A' // B
let b = 'B' // C
let c = 'C' // A

const letras = [b, c, a]; // invertemos
[a, b, c] = letras; 

console.log(a, b, c)

//               0    1    2    3    4    5    6    7    8 
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900]
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros
const [um, , tres, , cinco, , sete] = numeros

console.log(primeiroNumero, segundoNumero, terceiroNumero)
console.log(resto) // rest ou spread
console.log(um, tres, cinco, sete)