// Produto -> aumento, desconto
// Camiseta = cor, caneca = material

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia
}

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}
// Camiseta.prototype.constructor = Camiseta
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta // Corrigindo quem realmente é o construtor sem isso o construtor ficaria sendo produto

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material
    this.estoque = estoque
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca



const produto = new Produto('Gen', 111)
const camiseta = new Camiseta('Regata', 7.5, 'Preta')
const caneca = new Caneca('')
camiseta.aumento(10)
console.log(camiseta)
console.log(produto)
console.log(caneca)