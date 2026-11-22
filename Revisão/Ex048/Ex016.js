const Chamados = []
const Prioridades = ['Baixa', 'Media', 'Alta']
const StatusValidos = ['Aberto', 'Em Andamento', 'Resolvido']
const Tecnicos = ['João', 'Maria', 'Pedro', 'Carlos']
let Id = 0

// Verificações
function validarTexto(txt){
    return typeof txt === 'string' && txt.trim() !== ""
}

function abrirChamado(cliente, problema, prioridade) {
    const clienteVerificado = validarTexto(cliente)
    const problemaVerificado = validarTexto(problema)
    const prioridadeVerificada = validarTexto(prioridade)

    if (!clienteVerificado){
        return console.log('Nome do cliente invalido!')
    }

    if (!problemaVerificado) {
        return console.log('Problema invalido!')
    }

    if (!prioridadeVerificada) {
        return console.log('Prioridade invalida!')
    }

    let achaPrioridade = Prioridades.some(pri => pri.toLowerCase() === prioridade.toLowerCase());

    if (!achaPrioridade) {
        return console.log('Prioridade não encontrada!'); 
    }

    Id++

    Chamados.push({
        Id: Id,
        Cliente: cliente,
        Problema: problema,
        Prioridades: prioridade,
        Status: 'Aberto',
        Tecnico: ''
    })
}

function assumirChamados(idChamado, nomTecnico) {
    const idachado = Chamados.find(ids => idChamado === ids.Id)
    if (!idachado) 
        return console.log('ID não encontrado!')

    const tecnicoVerificado = validarTexto(nomTecnico)

    if (!tecnicoVerificado){
        return console.log('Nome do tecnico invalido!')
    }

    let achaTecnico = Tecnicos.some(tec => tec.toLowerCase() === nomTecnico.toLowerCase());

    if (!achaTecnico) {
        return console.log('Tecnico não encontrado!'); 
    }

    if(idachado.Status.toLowerCase() === 'resolvido') {
        return console.log('Chamado ja resolvido!')
    }

    idachado.Tecnico = nomTecnico
    idachado.Status = 'Em andamento'
}

function resolverChamado(idChamado) {
    const idachado = Chamados.find(ids => idChamado === ids.Id)
    if (!idachado) 
        return console.log('Chamado não encontrado!')

    if (idachado.Status.toLowerCase() === 'resolvido')
        return console.log(`Chamado ja resolvido pelo tecnico: ${idachado.Tecnico}`)

    if (idachado.Tecnico === '') 
        return console.log(`Chamado sem tecnico responsavel!`)

    idachado.Status = 'Resolvido'
    console.log(`Chamado Id: ${idachado.Id} resolvido pelo tecnico: ${idachado.Tecnico} status atual: ${idachado.Status}`)
}

function listarPorPrioridade(prioridade) {
    const prioridadeVerificado = validarTexto(prioridade)

    if (!prioridadeVerificado) {
        return console.log('Prioridade invalida!')
    }

    
}

abrirChamado('Jose', 'Erro em relatorio', 'Alta')
abrirChamado('Carlos', 'Sistema nao abre tela de cadastro', 'Urgente')
abrirChamado('Mariana', 'Lentidao ao consultar clientes', 'Media')
abrirChamado('Eduardo', 'Falha ao salvar pedido', 'Alta')
abrirChamado('Ana', 'Erro ao gerar boleto', 'Baixa')

assumirChamados(2, 'Pedro')

resolverChamado(2)
resolverChamado(2)

listarPorPrioridade('Alta')

//console.log(Chamados)