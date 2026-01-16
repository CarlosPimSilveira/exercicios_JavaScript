let n1, n2, n3

window.alert('Minha primeira mensagem!')
window.confirm('Confirmação')
n1 = window.prompt('Prompt')

n2 = 10
n3 = 90

window.alert(n1)
window.alert(n2 + n3)

const num1 = Number(prompt("Digite o primeiro número:"));

const operador = prompt("Digite o operador (+, -, *, /):");

const num2 = Number(prompt("Digite o segundo número:"));

let resultado;

switch (operador) {
    case "+":
        resultado = num1 + num2;
        break;

    case "-":
        resultado = num1 - num2;
        break;

    case "*":
        resultado = num1 * num2;
        break;

    case "/":
        if (num2 === 0) {
            alert("Não é possível dividir por zero");
            resultado = null;
        } else {
            resultado = num1 / num2;
        }
        break;

    default:
        alert("Operador inválido");
        resultado = null;
}

if (resultado !== null) {
    alert("Resultado: " + resultado);
}

// ordem de precedencia

let a = 5 + 3         // 8
let b = a % 5         // 3
let c = 5 * b ** 2    // 45
let d = 10 - a / 2    // 6
let e = 6 * 2 / d     // 2
let f = b % e + 4 / e // 3

let n = 3  
n = n + 4  // 7
n = n - 5  // 2
n = n * 4  // 8
n = n / 2  // 4
n = n ** 2 // 16
n = n % 5  //1

//  Simplificando

let N = 3
N += 4  // 7  
N -= 5  // 2
N *= 4  // 8
N /= 2  // 4
N **= 2 // 16
N %= 5  // 1

// incremento

let x = 5
x++ 
x-- 

//  relacionais
/*
    >
    <
    >=
    <=
    ==
    !=
*/
let m1 = 8
let m2 = 9

m1 > m2
m1 < m2
m1 >= m2
m1 <= m2
m1 == m2 
m1 != m2

let media = 7;

let res = media > 7 ? 'Aprovado' : 'Reprovado';

console.log(res);

