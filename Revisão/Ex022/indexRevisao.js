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

// Fabrica de objeto
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    }
}

const pessoa2 = criaPessoa('Carlos', 'Pim', 27)
const pessoa3 = criaPessoa('Maria', 'Oliveira', 32)
const pessoa4 = criaPessoa('João', 'Moreira', 55)
const pessoa5 = criaPessoa('Jean', 'Otávio', 39)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)

function inverterArray() {
    let ArrayInverter = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let ArrayInvertido = []
    let ArrayDesinvertido = []
    
    for (let C = 0; C < ArrayInverter.length; C++) {
        ArrayInvertido.push(
            ArrayInverter[ArrayInverter.length - 1 - C]
        )
    }
    // agora inverter o invertido
    for (let C = 0; C < ArrayInvertido.length; C++) {
        ArrayDesinvertido.push(
            ArrayInvertido[ArrayInvertido.length - 1 - C]
        )
    }
    return [ArrayInvertido, ArrayDesinvertido]
}
console.log(inverterArray())


