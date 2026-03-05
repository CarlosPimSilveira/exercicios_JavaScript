// Capturar evento de submit do formulario!
const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    
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