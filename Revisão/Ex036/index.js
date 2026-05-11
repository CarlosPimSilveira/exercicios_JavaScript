function criaElemento() {
    const existe = document.querySelector('.minhaDiv')
    if (!existe) 
        criaDivTarefas()

    
}

function criaDivTarefas() {
    const div = document.createElement('div')
    div.classList.add('minhaDiv')
    document.body.appendChild(div)
}