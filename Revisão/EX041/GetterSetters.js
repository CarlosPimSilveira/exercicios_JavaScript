// Object.defineProperty() e object.defineProperties()
// Getter - obter valor
// Setter - "setar" valor

// função construtora
function Produto(nome, preco, estoque) {
    // publico
    this.nome = nome
    this.preco = preco
    Object.defineProperty(this, 'estoque', {
        enumerable: true,    // Mostra a chave
        // value: estoque,      // Mostra o valor da chave
        // writable: false,     // impede de mudar o valor do estoque - pode alterar ou não
        configurable: false,  // pode apagar a chave, pode reconfigurar a chave - configuravel
        get: function() {
            return estoque
        },
        set: function(valor) {
            
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)
p1.estoque = 'O valor que eu quero'
console.log(p1.estoque)

