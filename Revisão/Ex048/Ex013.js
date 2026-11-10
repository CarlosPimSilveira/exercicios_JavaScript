// Sistema de controle de despesas (carteira financeira)
const transacoes = []
const tipos = ['Entrada', 'Saida']
const categoria = ['Salario', 'Alimentação', 'Transporte', 'Lazer', 'Contas']

// Validações!

function validarDescricao(desc) {
    return typeof desc === 'string' && desc.trim() !== ""
}

function validarValor(valor) {
    return typeof valor === 'number' && !Number.isNaN(valor) && !valor >= 0
}

function validarTipo(tipo) {
    if (typeof tipo !== 'string' || tipo.trim() === "") {
        return
    }

    const tp = tipos.map((tps) => { 
        return tps.toLocaleLowerCase()
    })

    let tipoValido = tp.includes(tipo.toLowerCase(), 0)

    return tipoValido
}

//

function adicionarTransacao(descricao, valor, tipo, categoria) {
    const descValidado = validarDescricao(descricao)
    const valValidado = validarValor(valor)
    const valTipo = validarTipo(tipo)

    if (!descValidado) {
        return console.log('Descrição invalida!')
    }

    if (!valValidado) {
        return console.log('Valor invalido!')
    }

    if (!valTipo) {
        return console.log('Tipo de transação incorreto!')
    }

    console.log(valTipo, descValidado, valValidado)
}

adicionarTransacao('teste', 10.0, 'entrada', 'teste')










