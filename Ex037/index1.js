/*
&& -> false && true -> returna false "O valor mesmo"
|| -> false || true -> Vai retornar "o valor Verdadeiro"
*/
/*
vai retornar o primeiro valor verdadeiro que for achado por isso o 'luiz otavio' veio primeiro e foi o retorno recebido.
*/
console.log(0 || false || null || 'Luiz otavio' || true)

const CorUsuario = null;
const CorPadrao = CorUsuario || 'preto'; 

console.log(CorPadrao)
//Retorno como preto pois ele verificou e corusuario veio valor de falso e o primeiro valor achado como true foi a cor preto

const a = 0
const b = null
const c = 'false'
const d = false
const e = NaN

console.log(a || b || c || d || e) 
//o falso retornado é uma string e string é avaliado como verdadeiro e por isso é retornado um "falso" que é verdadeiro