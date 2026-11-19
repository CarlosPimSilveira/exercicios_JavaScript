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