// Funções imediatas (IIFE)
// IIFE -> Immediately invoked function expression

function qualquerCoisa() {
    console.log('Olá mundo!')
}
qualquerCoisa();

(function() {
    const nome = 'Carlos'
    const sobrenome = 'Pim'
    console.log('IIFE')
    console.log(nome)

    function falaOi(nome, sobrenome) {
        let completo = nome + ' ' + sobrenome
        return completo
    }
    console.log(falaOi(nome, sobrenome))

    function falaNome() {
        console.log(nome + ' ' + sobrenome)
        function falaApenasSobrenome() {
            console.log(sobrenome)
        } falaApenasSobrenome()
    } falaNome()
})();

const nome = 'Outro nome fora do IIFE'
console.log(nome)
