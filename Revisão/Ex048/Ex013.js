// Sistema de controle de despesas (carteira financeira)
const transacoes = []
const tipos = ['Entrada', 'Saida']
const categorias = ['Salario', 'Alimentação', 'Transporte', 'Lazer', 'Contas']
let id = 0

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

function validarCategoria(cat) {
    if (typeof cat !== 'string' || cat.trim() === "") {
        return
    }

    const cg = categorias.map((cgs) => { 
        return cgs.toLocaleLowerCase()
    })

    let categoriaValido = cg.includes(cat.toLowerCase(), 0)

    return categoriaValido
}

function verificaDados() {
    if (transacoes.length <= 0) {
        return true
    } else {
        false
    }
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

    id++

    transacoes.push({     
        Id: id,
        Descricao: descricao,
        Valor: valor,
        Tipo: tipo,
        Categoria: categoria
    })
}

function listarTransacao() {
    if (verificaDados()) {
        console.log('Nenhuma transação cadastrada!')
    }

    transacoes.forEach((mov) => {
        console.log(`Id: ${mov.Id} descrição: ${mov.Descricao} valor: ${mov.Valor} Tipo: ${mov.Tipo} categoria: ${mov.Categoria}`)
    }) 
}

function filtrarPorCategoria(cate) {
    if (verificaDados()) {
        console.log('Nenhuma transação cadastrada!')
    }

    const categoriaAchada = transacoes.filter(
    item => item.Categoria.toLowerCase() === cate.toLowerCase()
    );
    console.log('---------- Categoria Achada! ----------')
    categoriaAchada.forEach((mov) => {
        console.log(`Descrição: ${mov.Descricao} valor: ${mov.Valor} Tipo: ${mov.Tipo} categoria: ${mov.Categoria}`)
    }) 
}

function verificarId(id) {
    return transacoes.findIndex(
        tra => tra.Id === id
    )
}

function removerTransacao(id) {
    if (verificaDados()) {
        return console.log('Nenhuma transação cadastrada!')
    }

    let achouId = verificarId(id)

    if (achouId >= 0) {
        transacoes.splice(achouId, 1)
    } else {
        return console.log('Id não achado!')
    }       
}

function ExibirResumoFinanceiro() {
    if (verificaDados()) {
        return console.log('Nenhuma transação cadastrada!')
    }
    let TotEnt = 0
    let TotSai = 0

    transacoes.forEach((mov) => {
        if (mov.Tipo.toLowerCase() === 'Entrada'.toLowerCase()) {
            TotEnt += mov.Valor
        }
        if (mov.Tipo.toLowerCase() === 'Saida'.toLowerCase()) {
            TotSai += mov.Valor
        }
    })
    console.log(`Total entrada: ${TotEnt.toFixed(2)} total saida: ${TotSai.toFixed(2)} saldo: ${TotEnt-TotSai.toFixed(2)}`)
}

adicionarTransacao('Salário mensal', 3000.00, 'Entrada', 'Salario')
adicionarTransacao('Freelance de programação', 450.00, 'Entrada', 'Salario')
adicionarTransacao('Compra no supermercado', 280.50, 'Saida', 'Alimentação')
adicionarTransacao('Almoço no restaurante', 35.90, 'Saida', 'Alimentação')
adicionarTransacao('Abastecimento do carro', 150.00, 'Saida', 'Transporte')
adicionarTransacao('Uber para o trabalho', 22.50, 'Saida', 'Transporte')
adicionarTransacao('Cinema com a noiva', 65.00, 'Saida', 'Lazer')
adicionarTransacao('Assinatura Netflix', 39.90, 'Saida', 'Lazer')
adicionarTransacao('Conta de energia', 180.00, 'Saida', 'Contas')
adicionarTransacao('Conta de internet', 99.90, 'Saida', 'Contas')
adicionarTransacao('Venda de produto usado', 200.00, 'Entrada', 'Lazer')
adicionarTransacao('Compra de roupas', 120.00, 'Saida', 'Lazer')
adicionarTransacao('Conta de água', 75.00, 'Saida', 'Contas')
adicionarTransacao('Vale alimentação', 500.00, 'Entrada', 'Salario')
adicionarTransacao('Manutenção da bicicleta', 85.00, 'Saida', 'Transporte')

listarTransacao()

filtrarPorCategoria('Contas')
removerTransacao(5)

ExibirResumoFinanceiro()


