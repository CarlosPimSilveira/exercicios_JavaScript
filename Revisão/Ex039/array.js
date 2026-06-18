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