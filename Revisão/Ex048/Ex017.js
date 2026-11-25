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

    transferir(valor, contaDestino) {
        if (typeof valor !== 'number' || Number.isNaN(valor) || valor <= 0) {
            console.log('Valor inválido.');
            return;
        }

        if (!(contaDestino instanceof ContaBancaria)) {
            return console.log('Conta bancaria invalida!');
        }

        if (contaDestino.numeroConta === this.numeroConta) {
            return console.log('Não é possivel transferir para sua propria conta!');
        }

        if (valor > this.saldo) {
            return console.log('Saldo insuficiente!')
        }

        this.saldo -= valor
        contaDestino.saldo += valor
        this.extrato.push({ tipo: `Transferencia enviada para ${contaDestino.numeroConta}`, valor: valor });
        contaDestino.extrato.push({ tipo: `Transferencia recebida de ${this.numeroConta}`, valor: valor });
    }

    exibirExtrato() {
        console.log('----- Exibir Extrato! -----')
        console.log(`=== Extrato de ${this.titular} (Conta: ${this.numeroConta}) ===`);
        if (this.extrato.length === 0) {
            console.log('Sem movimentações!')
            return
        }
        this.extrato.forEach((movimentacao, index) => {
            console.log(`${index + 1}. ${movimentacao.tipo}: R$ ${movimentacao.valor.toFixed(2)}`);
        });

        console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
        console.log('----- Fim da exibição -----')
    }
}

const conta1 = new ContaBancaria('Carlos', 1001)
const conta2 = new ContaBancaria('Pim', 1111)

conta1.depositar(500);
conta1.depositar(250);
conta1.sacar(250)

conta1.transferir(200, conta2)

conta2.depositar(250);

conta1.exibirExtrato()
conta2.exibirExtrato()

//console.log('Saldo atual:', conta1.saldo);
//console.log('Extrato:', conta1.extrato);



