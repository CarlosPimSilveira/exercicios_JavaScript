// Declaração de função! (function hoisting)
// Se refere ao comportamento do JavaScript de "elevar" declarações de funções e variáveis para o topo do escopo antes da execução do código.

// Function Declarations sofrem hoisting e podem ser chamadas antes de serem declaradas.
// Function Expressions e Arrow Functions não sofrem hoisting da mesma forma, pois a variável à qual a função é atribuída é elevada, mas a atribuição ocorre apenas no ponto certo do código.
falaOi()


function falaOi() {
    console.log('Oii!')
}

// First-Class objects(objetos de primeira classe)
// function expression
// uma constante recebe uma function como dado! function sem nome. mas por ter uma var faz ela ter o nome da mesma!
const souUmDado = function nomeDaFuncao() {
    console.log('Sou um dado.')
}

souUmDado();

// recebe um parametro que esta esperando uma funcao
// que nesse caso ta executando executafuncao ta sendo chamada passando a function souUmDado o que faz uma chamar a outra!
function executaFuncao(funcao) {
    funcao()
}

executaFuncao(souUmDado)


// Arrow function !

const funcaoArrow = () => {
    console.log('Sou uma arrow function!')
}

funcaoArrow()


// Dentro de um objeto
const obj = {
    //um metodo dentro do objeto!
    falar() {
        console.log('Estou falando...')
    }
}

obj.falar()
