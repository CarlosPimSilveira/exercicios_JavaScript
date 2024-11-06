let num1 = 0.7   //Number
let num2 = 0.1 //Number
console.log(num1.toString() + num2) //convertendo um numero para string
console.log(typeof num1)
console.log(num1.toString(2)) //Convertendo para representação em binario!
console.log(num1.toFixed(2)) //fazer arredondamento ou no caso sumir com os numeros apos o ponto
console.log(Number.isInteger(num1)) //retorna se o numero é um inteiro ou não (true - é inteiro | false - não é inteiro)

let temp = num1 * 'Ola'
console.log(Number.isNaN(temp)) //perguntamos se essa conta é um NaN (retorna verdadeiro sempre que a conta for invalido caso for valido ele da como falso pois a conta é valida a conta esta correta)

// IEEE 754-2008
console.log(num1 + num2)


num1 = ((num1 * 100) + (num2 * 100)) / 100

console.log(num1)

num1 += num2 // num1 = num1 + num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2
num1 += num2

num1 = parseFloat(num1.toFixed(2))
console.log(num1)
console.log(Number.isInteger(num1)) //verifica se o numero é inteiro falso nao é inteiro e verdade é inteiro



num1 = num1.toString() //nesse caso estamos agora tornando ela como string 
console.log(typeof num1)

