// Ex 86 — Caixa eletrônico
let saldoConta = 1000

// Faz deposito
function depositar(n1) {
    if (n1 <= 0) {
        return `Não pode depositar valor negativo`
    } else {
        return saldoConta += n1
    }
}

// Saca dinheiro
function sacar(n1) {
    if (n1 <= 0)
        return 'Operação invalida!'
    if (n1 > saldoConta) {
        return 'Valor invalido!'
    } else if (n1 === saldoConta) {
        saldoConta -= n1
        return 'Saldo da conta zerada!'
    } else {
        return saldoConta -= n1
    }
}

// Consulta o saldo da conta
function consultarSaldo() {
    return saldoConta
}

// Chama o consultor do saldo
console.log(consultarSaldo())

// Faz deposito na conta
console.log(depositar(100))

// Saca dinheiro
console.log(sacar(90))


