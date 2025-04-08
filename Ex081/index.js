// defineProperty -> Getter e Setters

function produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true,   // mostra a chave
        //value: estoque,   // pega o valor do estoque
        //writable: true,   // pode alterar
        configurable: true, // configuravel
        get: function() {
            return estoque //um metodo que vai retornar o valor
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('Bad value')
                return
            } //Enquanto nao enviar um numero o valor do estoque nao vai ser alterado pois estamos passando uma string!
            estoquePrivado = valor
        }
    })
}

function criaProduto(nome){
    return{
        get nome(){
            return nome
        },
        set nome(valor){
            //pegando o que foi enviado no p2.nome e tratando removendo o coisa
            valor = valor.replace('coisa', '')
            nome = valor
        }
    }
}

const p2 = criaProduto('camiseta')
p2.nome = 'Qualquer coisa'
console.log(p2.nome)

// Getter é para obter o valor e o Setters para configurar o valor
const p1 = new produto('camiseta', 20, 3)
console.log(p1)
p1.estoque = 'O valor que eu quero!' //passando uma string para o estoque que no set vai ser tratada
console.log(p1.estoque)


