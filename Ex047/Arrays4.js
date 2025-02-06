const numeros = [
    [1, 2, 3],
   //{
   //0  1  2 
   //   0 
   // }
    [4, 5, 6],
   //{
   //0  1  2 
   //   1 
   // }
    [7, 8, 9]
   //{
   //0  1  2 
   //   2
   // }
]
const [, [, , seis]] = numeros
const [lista1, lista2, lista3] = numeros
//aqui pulamos o primeiro indice(1, 2, 3) acessamos o segundo e nele pulamos os dois primeiros indices para por fim pegar o numero 6
console.log(seis)
console.log(lista3[2]) //outra forma de acessar
//atribuição via desestruturação
