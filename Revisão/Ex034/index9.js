// Funções fabrica (factory functions)
// Quando uma função esta dentro de um objeto chama metodo
function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        fala(assunto) {
            return `${this.nome} está falando ${assunto}`
        }, 
        peso: 80
    }
}

const p1 = criaPessoa('Luiz', 'Otavio')
const p2 = criaPessoa('Maria', 'Eduarda')

// Mesma coisa - this é quem chama! nesse caso! o objeto se refere a quem esta chamando!
console.log(p1.fala('falando sobre JS'))
console.log(p2.fala('teste'))
console.log(p1.nome)