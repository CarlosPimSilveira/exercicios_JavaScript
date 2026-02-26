/*
    Operadores Lógicos
    && -> AND -> E  - Todas as expressões precisam ser verdadeiras para retornar true
    || -> OR -> OU  - Um valor precisa obrigatoriamente ser verdadeiro
    ! -> NOT -> NÃO - Passa a negar ou seja !(false) entao isso retorna true
*/

function falaOi() {
    return 'Oi!'
}

const vaiExecutar = false

console.log(vaiExecutar && falaOi())