const data = new Date()

function criaP() {
    const p = document.createElement('p') // Cria uma tag p
    return p
}

function resultado() {
    const p = criaP()
    p.innerHTML = data.getDate()
    resultado.appendChild(p)
}

resultado()