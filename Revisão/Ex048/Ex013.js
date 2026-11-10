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

function validarCategoria(categoria) {
    if (typeof categoria !== 'string' || categoria.trim() === "") {
        return
    }

    const cg = categoria.map((cgs) => { 
        return cgs.toLocaleLowerCase()
    })

    let categoriaValido = cg.includes(categoria.toLowerCase(), 0)

    return categoriaValido
}

//

function adicionarTransacao(descricao, valor, tipo, categoria) {
    const descValidado = validarDescricao(descricao)
    const valValidado = validarValor(valor)
    const valTipo = validarTipo(tipo)
    const valCategoria = validarCategoria(categoria)

    if (!descValidado) {
        return console.log('Descrição invalida!')
    }

    if (!valValidado) {
        return console.log('Valor invalido!')
    }

    if (!valTipo) {
        return console.log('Tipo de transação incorreto!')
    }

    if (!valCategoria) {
        return console.log('Categoria invalida!')
    }

    console.log(valTipo, descValidado, valValidado, valCategoria)
}

adicionarTransacao('teste', 10.0, 'entrada', 'teste')










