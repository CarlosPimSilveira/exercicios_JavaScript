const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}

// For clássico - geralmente com iteráveis (array ou strings)
// For in - retorna o índice ou chavez (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)