// Atribuição via desestruturação (Objetos)

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereço: {
        rua: 'Av Brasil',
        numero: 320
    }
}
//console.log(pessoa.nome)
//const nome = pessoa.nome
const { nome: n = 'Não existe', sobrenome, idade } = pessoa

console.log(n, sobrenome, idade)