const array = [1, 2, 3]
array.push(4)
array[0] = 'Luiz'
console.log(array)

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi..., a minha idade é ${this.idade}`)
    },
    
    incrementaIdade() {
        this.idade++
    }
}
console.log(pessoa1.nome)
pessoa1.fala()
pessoa1.incrementaIdade()//26
pessoa1.incrementaIdade()//27
pessoa1.incrementaIdade()//28
pessoa1.fala()

// Fabrica de objeto
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    }
}
const pessoa2 = criaPessoa('Carlos', 'Pim', 27)
const pessoa3 = criaPessoa('Maria', 'Oliveira', 32)
const pessoa4 = criaPessoa('João', 'Moreira', 55)
const pessoa5 = criaPessoa('Jean', 'Otávio', 39)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)

