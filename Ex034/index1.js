const a = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
}
const b = a; // b esta apontado para o mesmo lugar que a na memoria  
a.nome = 'João'
console.log(b)