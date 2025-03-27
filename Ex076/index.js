//Método Splice
//              -5       -4       -3         -2        -1
//               0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']
const removidos = nomes.splice(3, 2, 'Luiz', 'Otávio')
console.log(nomes, removidos)



//indice, quantos quero apagar, elementos para adicionar! (elemento1, elemento2, elemento3...)
//splice retorna o elemento removido mas não como string e sim como array!
// Number.MAX_VALUE
// const removidos = nomes.splice(3, Number.MAX_VALUE) Vai remover tudo apartir do indice 3 ou seja se tiver 1 milhao de numeros ele vai remover todos
//const removidos = nomes.splice(3, 0, 'Luiz') -> nesse caso ele joga o gabriel para o proximo indice e adiciona o luiz no lugar!

//pop
const removidos = nomes.splice(-1, 1)

//Shift
const removidos = nomes.splice(0, 1)

//unshift
nomes.splice(0, 0, 'Luiz', 'Otávio')

//psh
nomes.splice(nomes.length, 0, 'Luiz')
