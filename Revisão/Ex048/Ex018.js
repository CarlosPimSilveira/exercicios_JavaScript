const pratos = [
    { nome: 'Pizza', preco: 45.90, disponivel: true },
    { nome: 'Hambúrguer', preco: 32.50, disponivel: true },
    { nome: 'Lasanha', preco: 38.00, disponivel: false },
    { nome: 'Strogonoff', preco: 29.90, disponivel: true },
    { nome: 'Macarrão', preco: 25.00, disponivel: false }
]

function confereTexto(txt) {
    return typeof txt === 'string' && txt.trim() !== ""
}

function validarValor(valor) {
        return typeof valor === 'number' &&
        Number.isFinite(valor) &&
        valor >= 0;
}

async function buscarPrato(BusPrato) {
    const pratoVerificado = confereTexto(BusPrato)

    if (!pratoVerificado) {
        throw new Error('Prato inválido!')
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pratoEncontrado = pratos.find(
                prato => prato.nome.toLowerCase() === BusPrato.trim().toLowerCase()
            )

            if (!pratoEncontrado) {
                reject('Prato não encontrado!')
            } else if (!pratoEncontrado.disponivel) {
                reject('Prato indisponível em estoque!')
            } else {
                resolve(pratoEncontrado)
            }
        }, 2000)
    })
}

function processarPagamento(valorPedido, saldoCliente) {
    const salValidado = validarValor(saldoCliente);

    if (!salValidado) {
        return Promise.reject('Saldo inválido!');
    }

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (saldoCliente < valorPedido.preco) {
                reject('Saldo insuficiente para realizar o pagamento!');
            } else {
                const saldoRestante = saldoCliente - valorPedido.preco;

                resolve({
                    mensagem: 'Pagamento aprovado!',
                    prato: valorPedido.nome,
                    valor: valorPedido.preco,
                    saldoRestante: saldoRestante
                });
            }

        }, 1500);

    });
}

buscarPrato('Pizza')
    .then(prato => processarPagamento(prato, 100))
    .then(res => console.log(res))
    .catch(erro => console.log(erro));