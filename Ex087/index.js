// Polimorfismo
// fazendo metodos se comportarem de maneira diferentes 
// sub classes
// classes = função construtora
// Superclass 
// function construtora
function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depoisitar = function(valor) {
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function() {
    console.log(`ag/c:  ${this.agencia}/${this.conta} | ` +
                `Saldo: R$${this.saldo.toFixed(2)}`
    )
}
/*
const conta1 = new Conta(11, 22, 10)
conta1.depoisitar(11)
conta1.depoisitar(10)
conta1.sacar(30)
conta1.sacar(0.01) */

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

// Fazendo o link dos prototype!
ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

// Sobrescrevendo o metodo sacar por esse que adiciona o limite 
ContaCorrente.prototype.sacar = function(valor) {
    if (valor > this.saldo + this.limite) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return
    }

    this.saldo -= valor
    this.verSaldo()
}

const cc = new ContaCorrente(11, 22, 0, 100)
cc.depoisitar(10)
cc.sacar(110)
cc.sacar(1)

function ContaPoupança (agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}

// Fazendo o link dos prototype!
ContaPoupança.prototype = Object.create(Conta.prototype)
ContaPoupança.prototype.constructor = ContaPoupança

const cp = new ContaPoupança(11, 22, 0)
console.log()
cp.depoisitar(10)
cp.sacar(110)
cp.sacar(1)



