// Funções fabrica (factory functions)
// Quando uma função esta dentro de um objeto chama metodo
function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        fala: function(assunto) {
            return `${nome} está falando ${assunto}`
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otavio')
console.log(p1.fala('falando sobre JS'))