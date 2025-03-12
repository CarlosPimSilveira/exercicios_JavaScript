// Closures

function retornaFuncao(nome) {
    //const nome = 'luiz'
    return function () {
        return nome
    }
}
//mudando o contexto lexico!
const funcao = retornaFuncao('luiz');
const funcao1 = retornaFuncao('Eduardo');
console.log(funcao)