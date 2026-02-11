/*
    Primitivos - String, number, boolean, undefined, null (bigint, symbol) - valor
    Referencia (Mutavel) - array, object, function
*/
let nome = 'Luiz'
nome = 'Otavio'
console.log(nome[0])

let a = 'A'
let b = a //copia
console.log(a, b)
a = 'Outra coisa'
console.log(a, b)

// Ambas vão ser afetadas diferente de antes
let C = [1, 2, 3]
let D = C //Diferente de antes isso não é uma copia eles estao apontando para o mesmo lugar na memoria!
console.log(C, D)
C.push(4)
D.pop() //ambos C e D vao ser afetados!
console.log(C, D) 

// Para realizar a copia
let N1 = [1, 2, 3, 4]
let N2 = [...N1] // Nesse caso estamos realmente copiando o valor e não apontando o caminho!
// Agora ambos trabalham de forma individual!
N2.push(5)
N1.pop() 
console.log(N1, N2)

// Agora com objetos é a mesma coisa

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}
const pessoa1 = {...pessoa} //Dessa forma é uma copia e nao aponta para o mesmo local!

pessoa.nome = 'Carlos'
console.log(pessoa, pessoa1)