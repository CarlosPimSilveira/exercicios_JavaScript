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
]// basicamente o primeiro array numeros tem 3 itens e cada um tem seu indice ou seja 0, 1 e 2 ja esses arrays dentro cada um tem um indice para cada item 0, 1 e 2 entao digamos que eu quero selecionar o array 2 com o item 1 o resultado seria o array com dados 7, 8 e 9 mas pegando o item 8. 
//array temos um array com outrs 3 arrays dentro

console.log(numeros[1][2])
//nesse caso estamos acessando o array de indice 1 e pegando o item de indice 2 dele dando resultado de 6

