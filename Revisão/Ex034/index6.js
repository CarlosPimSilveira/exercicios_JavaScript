// Closures
function returnaFuncao(nome) {
    return function () {
        return nome
    }
}

const funcao = returnaFuncao('Luiz')
const funcao2 = returnaFuncao('João')
console.log(funcao)
console.log(funcao2)