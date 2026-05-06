// Funções fabrica (factory functions)
// Quando uma função esta dentro de um objeto chama metodo
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        fala(assunto) {
            return `${this.nome} está falando ${assunto}`
        }, 
        altura: altura,
        peso: peso,
        // Começa a "fingir" ser um atributo da classe!
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80)
const p2 = criaPessoa('Maria', 'Eduarda', 1.6, 52)
console.log(p1.nome)
console.log(p1.altura)
console.log(p1.imc)
// Mesma coisa - this é quem chama! nesse caso! o objeto se refere a quem esta chamando!
console.log(p1.fala('falando sobre JS'))
console.log(p2.fala('teste'))
console.log(p1.nome)