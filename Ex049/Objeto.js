// Atribuição via desestruturação (Objetos)

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}

//const nome = pessoa.nome atribuição normal
//const { nome, sobrenome, idade, endereco } = pessoa // Atribuição via desestruturação 
const { endereco: { rua: r, numero }, endereco, ...resto } = pessoa
//usando a propriedade rest para pegar o que resta do objeto que nao pegamos.
console.log(r, numero, endereco, resto)