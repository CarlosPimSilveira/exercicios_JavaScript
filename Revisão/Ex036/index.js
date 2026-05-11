function criaElemento() {
    let divTarefa = document.querySelector('.tarefaDiv')
    
    if (!divTarefa) {
        divTarefa = criaDivTarefas()
    }

    let lista = document.querySelector('.olTarefa')
    if (!lista) {
        lista = criaLista(divTarefa)
    }

    criaTarefa()
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

function criaTarefa(){
    //const  
}