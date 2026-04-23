// Declaração de função (Function hoisting)
// Elas são "elevadas" no motor do js
falaOi()

function falaOi() {
    console.log('Oie')
}

// First- class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
    console.log('Sou um dado.')
}
//souUmDado()

function executaFuncao(funcao) {
    funcao()
}
executaFuncao(souUmDado)