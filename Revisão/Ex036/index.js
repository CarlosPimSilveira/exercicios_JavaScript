let contador = 1

function criaElemento() {
    let divTarefa = document.querySelector('.tarefaDiv')

    if (!divTarefa) {
        divTarefa = criaDivTarefas()
    }

    let lista = document.querySelector('.olTarefa')

    if (!lista) {
        lista = criaLista(divTarefa)
    }

    criaTarefa(lista)
}

function criaDivTarefas() {
    const div = document.createElement('div')
    div.classList.add('tarefaDiv')
    document.body.appendChild(div)
    return div
}

function criaLista(divTarefa) {
    const lista = document.createElement('ol')
    lista.classList.add('olTarefa')
    divTarefa.appendChild(lista)
    return lista
}

function criaTarefa(lista) {
    const itemLista = document.createElement('li')
    itemLista.classList.add('liTarefa')
    itemLista.classList.add(`liTarefa${contador}`)
    itemLista.innerText = `Tarefa ${contador}`
    lista.appendChild(itemLista)
    contador++
}