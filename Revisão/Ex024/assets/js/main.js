// Capturar evento de submit do formulario!
const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    console.log(peso, altura)
})

function setResultado(msg) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''

    const p = criaP()

    // Adicione esse filho ao resultado
    // resultado.appendChild(p)
}

function criaP() {
    const p = document.createElement('p') // Cria uma tag p
    return p
}