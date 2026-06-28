// Object.defineProperty() e object.defineProperties()

// função construtora
function Produto(nome, preco, estoque) {
    // publico
    /*
    this.nome = nome
    this.preco = preco
    */
    Object.defineProperty(this, 'estoque', {
        enumerable: true,    // Mostra a chave
        value: estoque,      // Mostra o valor da chave
        writable: false,     // impede de mudar o valor do estoque - pode alterar ou não
        configurable: false  // pode apagar a chave, pode reconfigurar a chave - configuravel
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,    // Mostra a chave
            value: nome,      // Mostra o valor da chave
            writable: true,     // impede de mudar o valor do estoque - pode alterar ou não
            configurable: true  // pode apagar a chave, pode reconfigurar a chave - configuravel
        },
        preco: {
            enumerable: true,    // Mostra a chave
            value: preco,      // Mostra o valor da chave
            writable: true,     // impede de mudar o valor do estoque - pode alterar ou não
            configurable: true  // pode apagar a chave, pode reconfigurar a chave - configuravel
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)
console.log(Object.keys(p1))

for(let chave in p1) {
    console.log(chave)
}