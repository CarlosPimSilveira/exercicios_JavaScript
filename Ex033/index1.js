function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
} //factori

const pessoa1 = criaPessoa ('Luiz', 'Otavio', 25)
const pessoa2 = criaPessoa ('Maria', 'Oliveira', 32)
const pessoa3 = criaPessoa ('João', 'Moreira', 55)
const pessoa4 = criaPessoa ('Junior', 'Lara', 44)
const pessoa5 = criaPessoa ('Jean', 'Otavio', 96)

console.log(pessoa1.nome, pessoa2.nome)