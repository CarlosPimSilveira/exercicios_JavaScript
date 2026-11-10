// Sistema de controle de despesas (carteira financeira)
const transacoes = []
const tipos = ['entrada', 'saida']

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
    let valTipo = validarTipo(tipo)

    if (!valTipo) {
        return console.log('Tipo de transação incorreto!')
    }

    console.log(valTipo, descValidado, valValidado)
}

adicionarTransacao('teste', 10.0, 'entrada', 'teste')










