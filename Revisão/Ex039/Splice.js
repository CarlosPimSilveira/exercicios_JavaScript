// Método Splice!
//               -5       -4       -3         -2        -1  -> indices negativos!
//                0        1        2          3         4  -> indices positivos!
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']
//nomes.splice(índice, deletar, elem1, elem2, elem3 )        qual indice, qual deletar e quais adicionar
// splice(4, 1) do indice 4(julia) quero remover 1
// splice(3, 2) do incice 3(gabriel) remova 2 ou seja gabriel e julia
// splice tambem pode retornar o remodivo mas ela remove um array e nao uma string! diferente do pop()
// splice(-1, 1) remove a julia pois ela é o -1 e to removendo 1 
// splice(-2, 1) remove o gabriel pois ele é indice -2 e to removendo apenas 1
// splice(-2, Number.MAX_VALUE) tire do -2(gabriel) ate o final (max_value) é um numero maximo que o js suporta
const removidos = nomes.splice(-2, 1)
console.log(nomes, removidos)