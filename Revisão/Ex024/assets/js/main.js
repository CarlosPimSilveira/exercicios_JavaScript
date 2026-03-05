// Capturar evento de submit do formulario!
const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log('Evento parado!')
    setResultado()
})

function setResultado(msg) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''

    const p = document.createElement('p') // Cria uma tag p
    p.classList.add('paragrafo-resultado')
    p.innerHTML = 'Qualquer coisa'
    // Adicione esse filho ao resultado
    resultado.appendChild(p)
}