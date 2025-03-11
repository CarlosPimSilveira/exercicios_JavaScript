// PARAMETROS da função!

//Estamos enviando um valor no parametro porem como na function nao tem um pedido de argumento entao ele ignora! mas o valor não se perde quando é uma function pois dentro dela temos o arguments que "salva" o que estamos enviando!
function funcao() {
    console.log('OI')
    console.log(arguments[5])
}

funcao('1', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)


function funcao1({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}

funcao1({nome: 'luiz', sobrenome: 'otavio', idade: 25})


function contar(operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros)
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero
        if(operador === '-') acumulador -= numero
        if(operador === '/') acumulador /= numero
        if(operador === '*') acumulador *= numero
        console.log(numero)
    }
    console.log(acumulador)
}

contar('+', 0, 20, 30, 40, 50)

const conta = function(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero
        if(operador === '-') acumulador -= numero
        if(operador === '/') acumulador /= numero
        if(operador === '*') acumulador *= numero
        console.log(acumulador)
    }
};

conta('+', 0, 20, 30, 40, 50)

const arrow = (...numeros) => console.log(numeros)

arrow(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)


let n1 = 10 
let n2 = 2

console.log(n1 > n2 ? 'Sim' : 'Não')