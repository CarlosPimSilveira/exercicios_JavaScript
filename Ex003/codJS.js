var n1 = Number.parseFloat(window.prompt('Digite um numero: '))
var n2 = Number.parseFloat(window.prompt('Digite outro numero: '))
// widonw.prompt retorna um string
// com o Number.parseInt fazemos a conversão de string para inteiro no window.prompt
// no caso agora trocamos para parseFloat para converter o prompt
// podemos tambem digitar apenas parseInt(n) ou parseFloat(n)
// tambem poderiamos usar o Number(n) nesse caso o js recebe o valor e escolhe o tipo recebido

// de numero para stringp odemos fazer o string(n)
// ou n.toString() n seria o valor ai nesse caso jogariamos uma string
// Exemplo de como usar n.toString()
var numero = 123;
var numeroString = numero.toString();
window.alert(typeof numero);
window.alert(typeof numeroString);
//podemos exibir mensagens usando o ${var} dessa forma nao precismaos por exemplo fazer 'mensagem ' + var porem usando o ${var} precisa usar `` 

// Number.parseInt(n) para converter de string para inteiro
// Number.parseFloat(n) para converter de string para real

/*
var s = 'JavaScript'

s.length         Quantos caracteres a string tem
s.toUpperCase()  Tudo para 'MAIÚSCULAS'
s.toLowerCase()  tUDO PARA 'MINÚSCULAS'

*/

var soma = n1 + n2

window.alert(`A soma entre ${n1} e ${n2} é igual a ${soma}`)

// (number + number) para adição
// (string + string) para concatenação