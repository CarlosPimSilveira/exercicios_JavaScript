// Sistema de controle de despesas (carteira financeira)
const transacoes = []

// Validações!

function validarDescricao(desc) {
    return typeof desc !== 'string' || desc.trim() === ""
}

function validarValor(valor) {
    return  (valor <= 0 || !Number.isInteger(valor))
}

//


function adicionarTransacao(descricao, valor, tipo, categoria) {
    const descValidado = validarDescricao(descricao)
    const valValidado = validarValor(valor)

}










