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