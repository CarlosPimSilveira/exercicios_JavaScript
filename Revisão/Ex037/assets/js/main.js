function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        inicia() {
            alert('Oi, iniciei')
        },
    };
}

const calculadora = criaCalculadora()
calculadora.inicia()