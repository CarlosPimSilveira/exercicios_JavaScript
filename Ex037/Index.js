/*
&& -> false && true -> returna false "O valor mesmo"
|| -> false || true -> returna true
*/
/*
    Valores avaliados como falso
    0
    '' "" ``
    null
    undefined
    Nan 
    Tudo ai é avaliado como falso em JS
*/
console.log('Luiz Otavio' && 0 && 'Maria')

function falaOi () {
    return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());