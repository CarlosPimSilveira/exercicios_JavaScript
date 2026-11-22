const Chamados = []
const Prioridades = ['baixa', 'media', 'alta']
const StatusValidos = ['aberto', 'em andamento', 'resolvido']
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
    const achaPrioridade = Prioridades.includes(prioridade.toLowerCase())

    if (!achaPrioridade) 
        return console.log(`Prioridade não encontrada!`)

    let listaChamados = ''

    Chamados.forEach((chama) => {
        if (chama.Prioridades.toLowerCase() === prioridade.toLowerCase()) {
            listaChamados += `Id: ${chama.Id} Cliente: ${chama.Cliente} - Problema: ${chama.Problema} - Status: ${chama.Status} - Tecnico: ${chama.Tecnico.length === 0 ? 'Aguardando técnico' : chama.Tecnico} \n`;
        }
    })

    if (listaChamados.length <= 0) 
        return console.log('Nenhum chamado com essa prioridade!')

    console.log(listaChamados)
}

function exibirPainelGeral() {
    let chamAberto = 0
    let chamAndamento = 0
    let chamResolvido = 0
    let priBaixa = 0
    let priMedia = 0
    let priAlta = 0

    Chamados.forEach((chama) => {
        if (chama.Status.toLowerCase() === 'aberto') {
            chamAberto += 1
        } else if (chama.Status.toLowerCase() === 'em andamento') {
            chamAndamento += 1
        } else if (chama.Status.toLowerCase()- === 'resolvido') {
            chamResolvido += 1
        } else {
            return console.log('Status invalido!')
        }
        if (chama.Prioridades.toLowerCase() === 'baixa') {
            priBaixa += 1
        } else if (chama.Prioridades.toLowerCase() === 'media') {
            priMedia += 1
        } else if (chama.Prioridades.toLowerCase() === 'alta') {
            priAlta += 1
        } else {
            return console.log('Prioridade invalida!')
        }
    })
    console.log(`Chamados 'aberto' total: ${chamAberto} chamados 'em andamento' total: ${chamAndamento} chamados 'resolvidos' total: ${chamResolvido}`)
    console.log(`Chamados com prioridade 'baixa' total: ${priBaixa} chamados com prioridade 'media' total: ${priMedia} chamados com prioridade 'alta' total: ${priAlta}`)
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

exibirPainelGeral()

//console.log(Chamados)