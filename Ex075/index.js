//Revisão do basico em ARRAYS
//                 1         2        3
const nomes = ['Eduardo', 'Maria', 'Joana']
//strings, objetos, funções, numeros
nomes[2] = 'João'
delete nomes[2] //deixando vazio um elemento do array sem alterar os indices!
console.log(nomes)

const nomes1 = new Array('Eduardo', 'Maria', 'Joana')
nomes1[2] = 'João'
delete nomes1[2] 
console.log(nomes1)

//Valor por referencia!

//Aqui se eu alterar o nomes vai afetar o novo e se eu alterar o novo o nomes tambem é alterado!
//const novo = nomes
//novo.pop()
//console.log(nomes)

//Copiando os dados do array
//Agora caso alterar o novo nada muda em nomes! pq fizemos uma capia do nomes para o novo
const novo = [...nomes]
novo.pop()
console.log(nomes)
console.log(novo)

console.log(nomes.length) //Tem 3 elementos isso é diferente de indice(0, 1, 2 = 3 itens)
const removido = nomes.pop() // vai remover a joana mas adicionar na removido!
const removido1 = nomes.shift() // Quase a mesma coisa mas esse vai deslocar todos os indices ou seja para remover o item ele move os indices maria passa a ser indice 0 e joana passa a ser indice 1
console.log(nomes, removido, removido1)

nomes.push('João'); //adicino qualquer coisa no final do meu array
nomes.unshift('Wallace') //Adiciona no começo do array porem desloca todos os indices alterando todos!
console.log(nomes)

//                     0         1        2         3         4            
const sobrenome = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana']
const novo1 = nomes.slice(1, 3) //fatiando um array
console.log(sobrenome)
console.log(novo1) //No caso ele começou no indice 1 e termina no 3 porem ele nao pega o 3 pois ele apenas pega o que esta entre 1 e 3 sendo 1 o primeiro que é pego e 3 onde ele deve parar mas nao pegar! 

//Converter string para array

const conv = 'Luiz Otávio Miranda'
const converter = conv.split(' ')
console.log(converter) //pegamos o espaço e usando para seprar e criar um array
const desconverter = converter.join(' ') //pegando um array e fazendo virar uma string novamente!
console.log(desconverter)