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
// splice(3, 0, 'carlos') -> ele vai ate o indice 3(gabriel) e adiciona o (carlos) agora carlos é o indice 3 e o gabriel passa a ser o indice 4 com isso julia tambem se move para o indice 5 e por ai vai!
// nomes.splice(3, 1, 'Carlos') -> nesse caso ele remove o gabriel salva em removidos e no local adiciona carlos fazendo carlos ser o indice 3 e julia continuar no indice 4
// simular pop()
const removidos = nomes.splice(-1, 1) // removi a julia e salvei no removidos

// shift
const removidos1 = nomes.splice(0, 1) // removi a maria e ela foi para o removidos1

// push
nomes.splice(nomes.length, 0, 'Luiz', 'Otávio', 'Miranda') // adiciona no final do array!

// unshift
nomes.splice(0, 0, 'Eduardo', 'Pim', 'Larissa') // adiciona no começo do array!

console.log(nomes, removidos, removidos1)