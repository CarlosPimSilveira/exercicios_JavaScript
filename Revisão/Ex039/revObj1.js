// revisão!
const pessoa1 = new Object()
pessoa1.nome = 'Luiz'
pessoa1.sobrenome = 'Otávio'
pessoa1.idade = 30
pessoa1.falarNome = function() {
    return (`${this.nome} está falando o seu nome.`)
}
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}
// quando functions estão dentro de objetos chamamos de metodos!
for(let chave in pessoa1) {
    console.log(pessoa1[chave])
}