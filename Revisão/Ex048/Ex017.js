// Sistema bancario com classes ES6
// Sistema bancário com classes ES6
class ContaBancaria {
    constructor(titular, numeroConta) {
        this.titular = titular;
        this.numeroConta = numeroConta;
        this.saldo = 0;
        this.extrato = [];
    }

    depositar(valor) {
        if (typeof valor !== 'number' || Number.isNaN(valor) || valor <= 0) {
            console.log('Valor inválido para depósito.');
            return;
        }

        this.saldo += valor;
        this.extrato.push({ tipo: 'Depósito', valor: valor });

        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
    }

    sacar(valor) {
        if (typeof valor !== 'number' || Number.isNaN(valor) || valor <= 0) {
            console.log('Valor inválido para sacar.');
            return;
        }

        if(valor > this.saldo) {
            return console.log('Saldo insuficiente!')
        }

        this.saldo -= valor;
        this.extrato.push({ tipo: 'Sacar', valor: valor });
    }
}

const conta1 = new ContaBancaria('Carlos', 1001);

conta1.depositar(500);
conta1.depositar(250);
conta1.sacar(750)

console.log('Saldo atual:', conta1.saldo);
console.log('Extrato:', conta1.extrato);



