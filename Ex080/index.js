//Object.defineProperty() e Object.defineProperties()
// uma define apenas uma e a outra varias

function produto(nome, preco, estoque) {
    //this.nome = nome
    //this.preco = preco
    //this.estoque = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // pega o valor do estoque
        writable: false, // valor do estque nao pode ser alterado
        configurable: true // pode apagar a chave.
    })

    //Object.defineProperty(this, 'estoque', {
    //    enumerable: true, // mostra a chave
    //    value: estoque, // pega o valor do estoque
    //    writable: true, // valor do estque nao pode ser alterado
    //    configurable: false // pode apagar a chave. ou seja nao pode configurar! ele como falso não permite apagar a variavel ou reconfigurar a variavel!
    //})

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // pega o valor do estoque
            writable: true, // valor do estque nao pode ser alterado
            configurable: true // pode apagar a chave.
        },
        preco:{
            enumerable: true, // mostra a chave
            value: preco, // pega o valor do estoque
            writable: true, // valor do estque nao pode ser alterado
            configurable: true // pode apagar a chave.
        }
    })
}

const p1 = new produto('Camiseta', 20, 3)
p1.estoque = 50000 // como travamos o valor na parte de cima aqui nao vai funcionar de nenhuma forma a menos que trocamos o writable para true
console.log(p1)
console.log(Object.keys(p1)) // um array com as chaves que estao com enumerable. mostra as que estao true caso todas fossem false nenhuma seria mostrada

