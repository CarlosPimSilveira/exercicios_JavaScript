/*
entre 0 - 11 bom dia
entre 12 - 17 boa tarde
entre 18 - 23 boa noite
*/
//if pode ser usado sozinho
//sempre que uilizo a palavra else, preciso de um if antes
//eu posso ter varios else ifs na checagem
//so posso ter um else na checagem 

const hora = 18;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia')
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde')
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite')
} else {
    console.log('Horario invalido!')
}