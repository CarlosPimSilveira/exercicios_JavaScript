const pratos = [
    { nome: 'Pizza', preco: 45.90, disponivel: true },
    { nome: 'Hambúrguer', preco: 32.50, disponivel: true },
    { nome: 'Lasanha', preco: 38.00, disponivel: false },
    { nome: 'Strogonoff', preco: 29.90, disponivel: true },
    { nome: 'Macarrão', preco: 25.00, disponivel: false }
]

function confereTexto(txt) {
    return typeof txt === 'string' && txt.trim() !== ""
}

function buscarPrato(BusPrato) {
    const pratoVerificado = validarTexto(BusPrato)

    if (!pratoVerificado){
        return console.log('Prato invalido!')
    }

}


buscarPrato('Lasanha')
