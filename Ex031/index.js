//            123456789
const nome = 'Luiz Otavio'
console.log(nome[10])

//               0       1        2 indices no array
const alunos = ['Luiz', 'Maria', 'João']
console.log(alunos[2]) //acesso apenas o indice 2 fazendo aparecer apenas joão 
alunos[0] = 'Eduardo' //mudando o luiz para eduardo
console.log(alunos)

alunos[3] = 'Luiza' //Adicionamos um novo indice no array com valor luiza porem aqui temos que saber tamanho do array e adicionar no ultimo lugar
console.log(alunos)

alunos[alunos.length] = 'Jose' //aqui ele aumenta o array em um item sem precisar falar qual indice. pq no caso ele ve o tamanho e adiciona
console.log(alunos)
console.log(alunos.length) //para saber o tamanho do array

alunos.push('Otavio') //aqui ele puxa o array e adiciona ao final dele automaticamente
console.log(alunos)

alunos.unshift('Luiza') //aqui pega o nome luiza e adiciona como o "primeiro indice" ou seja adiciona no 0 mudando os demais items para os proximos indices
console.log(alunos)

alunos.pop() //remove o ultimo item do array
console.log(alunos)

const removido = alunos.pop() //aqui estamos salvando numa var o item removido
console.log(alunos)
console.log(removido)

const removido1 = alunos.shift() //Remove o primeiro item do array e nao o ultimo!
console.log(alunos)
console.log(removido1)

delete alunos[1] //estamos removendo o indice 1 porem o lugar vai ficar vazio sem alterar os indices como anteriormente foi feito
console.log(alunos)

console.log(alunos[50]) //acessando um indice que nao existe retorna undefined!

alunos.push('Jorge')
alunos.push('Eduardo')

console.log(alunos.slice(0, 3)) //estamos "fatiando" o array fazendo aparecer apenas alguns dados no caso fazer do indice 0 ate o 3 no caso 0 ate 2 pq de 0 ate 2 da total de 3

console.log(typeof alunos) //retorna objeto

console.log(alunos instanceof Array) //retorna true é uma instancia de array falso nao é 