// map - Mapeando array
// altera valores do array
// dobre os numeros!
//               0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const Ndobros = numeros.map(valor => valor * 2)
console.log(Ndobros)

// Para cada elemento: 
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    { nome: 'luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
]

const Nomestring = pessoas.map(pessoas => pessoas.nome).join(', ')
console.log(Nomestring)

const revIdade = pessoas.map(obj => ({ idade: obj.idade }))
console.log(revIdade)

// Dessa forma o objeto original esta sem sofrer alteração pois copiamos ele para um novo objeto e mudamos ele!
const id = pessoas.map(function(obj, indice) {
    const newObj = {...obj }
    newObj.id = indice;
    return newObj
})

console.log(id)
console.log(pessoas)