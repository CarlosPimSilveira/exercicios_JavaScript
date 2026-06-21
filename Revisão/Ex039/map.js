// Map - Mapeando o array
// Dobre os numeros
//               0  1   2   3  4  5  6  7  8  9   10  11  12  13  14... 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27, 10, 15, 20, 22, 29, 63, 99, 14, 15]
const numerosEmdobro = numeros.map(valor => valor * 2)
console.log(numerosEmdobro)


// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]

const nomes = pessoas.map(obj => obj.nome)
const idades = pessoas.map(obj => ({ idade: obj.idade}))
console.log(nomes)
console.log(idades)


