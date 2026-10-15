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

// Consulta o saldo da conta
function consultarSaldo() {
    return saldoConta
}

// Chama o consultor do saldo
console.log(consultarSaldo())

// Faz deposito na conta
console.log(depositar(100))



