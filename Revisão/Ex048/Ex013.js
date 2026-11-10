// Sistema de controle de despesas (carteira financeira)
const transacoes = []
const tipos = ['entrada', 'saida']

// Validações!

function validarDescricao(desc) {
    return typeof desc !== 'string' || desc.trim() === ""
}

function validarValor(valor) {
    return typeof valor !== 'number' || Number.isNaN(valor) || valor <= 0
}

//

function adicionarTransacao(descricao, valor, tipo, categoria) {
    const descValidado = validarDescricao(descricao)
    const valValidado = validarValor(valor)
    const valTipo = validarTipo(tipo)
    

}










