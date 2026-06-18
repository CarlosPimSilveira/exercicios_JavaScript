// Revisão de array
//                 0         1        2 
const nomes = ['Eduardo', 'Maria', 'Joana']
nomes[2] = 'João'
delete nomes[2] // remover o item do array sem mexer nos indices!
console.log(nomes)
// String, Objetos, Funções, Números!
// Construtor
//const nome = new Array('Eduardo', 'Maria', 'Joana')
// Valor por referência
const novo = nomes // num é copia é apontar para o mesmo local da memoria!
novo.pop() // ambos perdem pq ambos apontam para o mesmo local na memoria!
console.log(nomes, novo)
// copiar pegar todos os elementos e nao apontar para o mesmo local
const novos = [...nomes]
novos[2] = 'João' // agora como ambos não estão ligados posso alterar 1 sem afetar o outro!
console.log(nomes, novos)
console.log(novos.length)
const removido1 = novos.pop() //final
const removido2 = novos.shift() // começo
console.log(removido, novos)