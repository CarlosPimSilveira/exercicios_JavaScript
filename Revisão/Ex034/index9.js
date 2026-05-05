// Funções fabrica (factory functions)
function criaPessoa(nome, sobrenome) {
    return {
        nome, sobrenome
    }
}

const p1 = criaPessoa('Luiz', 'Otavio')
console.log(p1)