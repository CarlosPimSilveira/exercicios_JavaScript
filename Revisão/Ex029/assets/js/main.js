const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

const corpo = document.querySelector('.container')

function criaElemento() {
    for (let c = 0; c < elementos.length; c++) {
        let tg = document.createElement(elementos[c].tag)
        tg.innerText = elementos[c].texto
        corpo.appendChild(tg)
    }
}

criaElemento()