// ? : operadores ternarios

const pontuacaoUsuario = 1000;                 //True entra aq | False entra aq
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal!'
//                   (condição) ? 'valor para  verdadeiro' : 'valor para falso'
// Mesmo codigo que o abaixo mas usando operadores ternarios.
console.log(nivelUsuario)

if(pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP')
} else {
    console.log('Usuário normal!')
}

