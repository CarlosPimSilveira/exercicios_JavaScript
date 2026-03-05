// Capturar evento de submit do formulario!
const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso) {
        setResultado('Peso inválido!', false)
        return
    }

    if (!altura) {
        setResultado('Altura inválido!', false)
        return
    }

    const imc = getImc(peso, altura)

    
})


function getImc(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''

    const p = criaP()
    p.innerHTML = msg
    resultado.appendChild(p)

    // Adicione esse filho ao resultado
    // resultado.appendChild(p)
}

function criaP() {
    const p = document.createElement('p') // Cria uma tag p
    return p
}