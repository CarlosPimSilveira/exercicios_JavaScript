//            0123....  
const nomes = ['Luiz', 'otavio', 'Henrique']

for (let valor of nomes) {
    console.log(valor)
}

console.log('####')

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)
});

// For classico - geralmente com iteráveis (array ou strings)
// For in - retorna o indice ou chave (string, array ou objetos)
// For of - retorna o valor em si (iteraveis, arrays ou strings)