// Funções fabrica (Factory functions!)
// funções que retornam objetos!
// Criando funções dentro de um objeto nos chamamos eles de metodos!
// this sempre vai se referir a pessoa que estamos falando!
// constructor function (função construtora)

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        get nomeCompreto() {
            return `${this.nome} ${this.sobrenome}`
        },
        // Setter
        set nomeCompreto(valor) {
            valor = valor.split(' ') //divindo o valor por espaços que se torna um vetor 
            this.nome = valor.shift() //esse shift ele remove o primeiro valor e passa para o nome
            this.sobrenome = valor.join(' ') // Adicionando o resto do nome!
            console.log(valor)
        },
        fala: function(assunto) { //um metodo!
            return `${this.nome} está ${assunto}`
        }, // nesse caso this é o p1 pois ele que esta chamando!
        altura,
        peso,
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

//this sempre vai ser a pessoa que chama nesse caso agora o this seria o p2 pois ele que esta chamando o objeto!

// com o GET ele "finge" ser um atributo da classe GETTER - para obeter o valor

const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80)
const p2 = criaPessoa('Maria', 'Eduarda', 1.6, 42)
console.log(p2.fala('falando sobre js'))
console.log(p1.nome)
console.log(p2.imc)
p1.nomeCompreto = 'Maria Oliveira Silva'
console.log(p1.nomeCompreto)
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala('teste'))