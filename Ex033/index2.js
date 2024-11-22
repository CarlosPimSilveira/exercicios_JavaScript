const pessoa1 =  { //objeto
    nome: 'Luiz',
    sobrenome: 'miranda',
    idade: 25,

    fala() { //metodo fala
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`) //esse objeto. nesse contexto representa esse objeto o this
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade() {
        ++this.idade; //this seria o objeto que estamos criando
    }
}

pessoa1.fala()
pessoa1.incrementaIdade() //fala primeiro o nome e sobrenome depois a idade atual apos isso ele chama o incrimentaIdade que aumenta a idade e apos isso estamos chamando novamente o fala que novamente fala nome, sobrenome e idade!
pessoa1.fala()