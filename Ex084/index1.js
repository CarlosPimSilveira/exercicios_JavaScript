function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

// Entao fora da minha function construtora eu criei um metodo que faz o desconto! isso melhora o desempenho.
// Melhor colocar os medotos fora da function construtora

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('camiseta', 50)
p1.desconto(5)
p1.aumento(50)

// Literal
const p2 = {
    nome: 'caneca',
    preco: 15
}

// Com isso o p2 passa a ter acesso aos metodos de desconto e aumento que estavam dentro do produto.
// Pois setamos o prototype dele como o do Produto
// agora ate o construtor do p2 muda para o produto como se fosse um item criado dentro do produto 
Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(10)

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 100
    },
    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value:42
    }
}) //temos um objecto normal vazio dessa forma
//p3.preco = 100 //Aqui criamos no p3 o preco pois ele era um objeto vazio
p3.aumento(10)

console.log(p1)
console.log(p2)
console.log(p3)


