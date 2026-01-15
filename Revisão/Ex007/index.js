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