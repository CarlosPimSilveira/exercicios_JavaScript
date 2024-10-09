let num = [5, 8, 2, 9, 3]

num.push(1) //aqui adicionamos o valor 1 ele seria adicionado no final porem na linha de baixo estamos organizando o vetor o que faz esse valor ficar em primeiro sem a organização abaixo o vetor ficaria [5, 8, 2, 9, 3, 1]
num.sort()    //aqui colocamos em ordem o vetor
console.log(num) //mostra todos os valores do vetor
console.log(`O vetor tem ${num.length} posições`) //mostra quantas casas tem o nosso vetor 0, 1, 2, 3, 4 total 5 no caso era 5 antes de adicionar um valor extra
console.log(`O primeiro valor do vetor é ${num[0]}`) //mostra o primeiro valor do vetor da casa 0