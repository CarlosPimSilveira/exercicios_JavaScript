const chamados = []
const prioridades = ['Baixa', 'Media', 'Alta']
const StatusValidos = ['Aberto', 'Em Andamento', 'Resolvido']
let id = 0

// Verificações
function verificaCliente(cliente){
    return typeof cliente === 'string' && cliente.trim() !== ""
}

function verificarProblema(problema) {
    return typeof problema === 'string' && problema.trim() !== ""
}

function abrirChamado(cliente, problema, prioridades) {
    const clienteVerificado = verificaCliente(cliente)
    const problemaVerificado = verificarProblema(problema)

    if (!clienteVerificado){
        return console.log('Nome do cliente invalido!')
    }

    if (!problemaVerificado) {
        return console.log('Problema invalido!')
    }

}


abrirChamado('Carlos', 'Erro em relatorio', 'Alta')
