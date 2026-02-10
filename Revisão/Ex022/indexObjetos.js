const array = [1, 2, 3]
array.push(4)
array[0] = 'Luiz'
console.log(array)

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
}
console.log(pessoa1.nome)

// Fabrica de objeto
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}
const pessoa2 = criaPessoa('Carlos', 'Pim', 27)
console.log(pessoa2)