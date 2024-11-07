let num1 = 9.54578

let num2 = Math.floor(num1) //arredonda para baixo o valor numero inteiro mais proximo
console.log(num2)

let num3 = Math.ceil(num1)  //Arredonda para cima numero inteiro mais proximo
console.log(num3)

let num4 = Math.round(num1); //nesse caso ele arredonda para o mais proximo pode ser para cima ou baixo depende de quem é mais proximo
console.log(num4)

console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6)) //ele pega o maior numero da sequencia
console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6)) //ele pega o menor numero da sequencia
//objeto

console.log(Math.random()) //gera um numero aleatorio com varias casas decimais entre 0 e 1 sendo 1 nunca incluso

const aleatorio = Math.random() * (10 - 5) + 5; //agora o numero aleatorio fica entre 10 e 5
console.log(aleatorio)

const aleatorio1 = Math.round(Math.random() * (10 - 5) + 5) //pegando numero aletorio entre 10 e 5 inteiros
console.log(aleatorio1)

console.log(Math.PI) //valor de pi

console.log(Math.pow(2, 10)) //fazendo potencia
console.log(2 ** 10) //tambem fazendo potencia

let num5 = 9
console.log(num5 ** (1/2)) //raiz quadrada!
console.log(num5 ** 0.5) //raiz quadrada!

console.log(100 / 0) //geralmente daria erro mas aqui da Infinity avaliado como verdadeiro
console.log(!!(100 / 0))