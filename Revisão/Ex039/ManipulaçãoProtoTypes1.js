function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Camiseta', 50)
// Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
} // Agora o p2 caneca consegue ter acesso ao prototype do produto podendo fazer o mesmo e ainda é exibida como se o contrutor fosse a function produto que é contrutora
Object.setPrototypeOf(p2, Produto.prototype)

p1.aumento(5)
console.log(p1)
p2.aumento(25)
console.log(p2)