// Capturar evento de submit do formulario!
const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log('Evento parado!')
})

function setResultado(msg) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = msg
}