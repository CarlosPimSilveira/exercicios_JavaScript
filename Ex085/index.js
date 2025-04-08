// herança
// Produto -> aumento, desconto
// Camiseta, caneca
// cor e material
// function construtora - abstração
function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia
}
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    // uma funcionalidade a mais que o produto não tem.
    this.cor = cor
}
// pronto agora com isso a camiseta tem acesso a aumento e desconto porem com isso perdeu o construtor
Camiseta.prototype = Object.create(Produto.prototype)
// pronto com isso recolocamos o metodo construtor novamente para indicar qual é o construtor
Camiseta.prototype.constructor = Camiseta

// Sobreescrevendo o metodo aumento agora em vez de valor vai aumentar por porcentagem
// Ele sobreescreveu o metodo antigo do aumento e trocou por esse que agora é em porcentagem
Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque
        },
        set: function(valor) {
            if (typeof valor !== 'number') return
            estoque = valor
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const produto = new Produto('gen', 110)
const camiseta = new Camiseta('regata', 7.5, 'preta')
const caneca = new Caneca('Chaves', 55, 'Porcelana', 5)
caneca.estoque = 50
camiseta.aumento(100)

console.log(camiseta)
console.log(produto)
console.log(caneca)