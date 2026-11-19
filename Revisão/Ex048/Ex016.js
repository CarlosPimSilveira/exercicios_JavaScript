const Chamados = []
const Prioridades = ['Baixa', 'Media', 'Alta']
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

    let achaPrioridade = Prioridades.some(pri => pri.toLowerCase() === prioridades.toLowerCase());

    if (!achaPrioridade) {
        return console.log('Prioridade não encontrada!'); 
    }

}


abrirChamado('Carlos', 'Erro em relatorio', 'Alta')
