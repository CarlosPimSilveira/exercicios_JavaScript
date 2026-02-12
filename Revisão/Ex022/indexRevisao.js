let Array1 = [1, 2, 3, 4, 5, 'teste']
let ArrayCopia = Array1
// Dessa forma ambos estão apontados para o mesmo local então se algo mudar em 1 ambos são afetados!

let ArrayNovo = [...Array1]
// Dessa forma estamos copiando os valores e ai podemos editar o conteudo sem afetar o outro!

let Objeto1 = {
    Nome: 'Carlos',
    Sobrenome: 'Pim'
}
let ObjetoNovo = {...Objeto1}
// Agora copiamos um objeto podemos então editar sem afetar o original!