/*
    Primitivos (imutáveis) - String, Number, Boolean, Undefined, null, (bigint, symbol) - valor imutavel valores copiados

    referêrencia (mutável) - Arrays, Object, Function valores passados por referência 
*/ 
//          1234
let nome = 'Luiz'
nome[0] = 'R'
console.log(nome[0], nome)
//como é imutável o L em luiz nao vai ser trocado pelo R 


let a = 'A'
let b = a //cópia do valor de a
console.log(a, b)

a = 'Outra coisa'
console.log(a, b)

//passando por referencia ambos estão apontando para o mesmo local da memoria
let c = [1, 2, 3]
let d = c
let e = [...c] //nesse caso estamos copiando os dados do array c para o e porem agora eles são independentes podendo ter mudanças independentes!
console.log(c, d)
c.push(4)
console.log(c, d) //por isso mesmo mexendo na var c d tambem muda pois estão ambos apontando para o mesmo local na memoria!
d.pop()
console.log(c, d) //ambos vao ser afetados pelo pop que retira um valor do array
c.push('Luiz')
console.log(e, d, c) 
