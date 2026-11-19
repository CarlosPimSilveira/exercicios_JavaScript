const Chamados = []
const Prioridades = ['Baixa', 'Media', 'Alta']
const StatusValidos = ['Aberto', 'Em Andamento', 'Resolvido']
const Tecnicos = ['João', 'Maria', 'Pedro', 'Carlos']
let Id = 0

// Verificações
function verificaCliente(cliente){
    return typeof cliente === 'string' && cliente.trim() !== ""
}

function verificarProblema(problema) {
    return typeof problema === 'string' && problema.trim() !== ""
}

function verificaTecnico(tecnico) {
    return typeof tecnico === 'string' && tecnico.trim() !== ""
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

    Id++

    Chamados.push({
        Id: Id,
        Cliente: cliente,
        Problema: problema,
        Prioridades: prioridades,
        Status: 'Aberto',
        Tecnico: ''
    })
}

function assumirChamados(idChamado, nomTecnico) {
    const tecnicoVerificado = verificaCliente(nomTecnico)

    if (!tecnicoVerificado){
        return console.log('Nome do cliente invalido!')
    }

    Chamados.forEach((chama) => {
        if (chama.Id === idChamado) {
            chama.Tecnico = nomTecnico
            chama.Status = 'Em andamento'
        }
    })
}

abrirChamado('Jose', 'Erro em relatorio', 'Alta')
abrirChamado('Carlos', 'Sistema nao abre tela de cadastro', 'Urgente')
abrirChamado('Mariana', 'Lentidao ao consultar clientes', 'Media')
abrirChamado('Eduardo', 'Falha ao salvar pedido', 'Alta')
abrirChamado('Ana', 'Erro ao gerar boleto', 'Baixa')

assumirChamados(2, 'Pedro')


console.log(Chamados)