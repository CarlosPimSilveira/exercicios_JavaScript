// Funções imediatas (IIFE) -> immediately invoked function expression
// nos a envolvemos com () o que faz ela não ter necessidade de ser chamada no escopo global!

(function(idade, peso, altura){
    console.log(123456)
    const nome = 'luiz'

    console.log(nome)

    const sobrenome = 'miranda'
    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome() {
        console.log(criaNome('luiz'))
    }

    falaNome()

    console.log(idade, peso, altura)
})(30, 80, 1.80) // aqui chama a function a todos os momentos mesmo estando fora do escopo global! passando os parametros!

const nome = 'Qualquer coisa'
console.log(nome)

(function() {

})()