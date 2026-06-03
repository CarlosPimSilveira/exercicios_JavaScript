function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            alert('Oi, iniciei')
        },

        cliqueBotoes() {
            document.addEventListener('click', function(e) {
                const el = e.target
            });
        },
    };
}

const calculadora = criaCalculadora()
calculadora.inicia()