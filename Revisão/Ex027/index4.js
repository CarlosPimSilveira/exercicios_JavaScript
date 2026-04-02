// Estudo variado

const pessoa = {
    nome: 'Luiz',
    sobrenome: '',
    idade: 30,
    endereço: {
        rua: 'Av Brasil',
        numero: 320
    }
}

const { nome, sobrenome } = pessoa;

console.log(
    nome || 'Nome vazio',
    sobrenome || 'Sobrenome vazio'
);