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
    itemLista.classList.add(`liTarefa${contador}`)

    itemLista.addEventListener('dblclick', function () {
        input.disabled = false
        input.focus()
    })

    const input = document.createElement('input')
    input.type = 'text'

    input.classList.add(`pLiTarefa${contador}`, 'inputTarefa')
    itemLista.appendChild(input)
    lista.appendChild(itemLista)

    const btnAdicionar = document.querySelector('.btnAdicionar')
    btnAdicionar.disabled = true
    input.focus()

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const valor = input.value.trim()
            if (valor === '') {
                itemLista.remove()
                btnAdicionar.disabled = false
                return
            }

            input.disabled = true
            btnAdicionar.disabled = false
            criaElemento()
        }
    })
    
    input.addEventListener('blur', function () {
        const valor = input.value.trim()

        if (valor === '') {
            itemLista.remove()
            btnAdicionar.disabled = false
        } else {
            input.disabled = true
            btnAdicionar.disabled = false
        }
    })

    contador++
}

function editaElementos() {
    const inputEditar = document.querySelectorAll('.inputTarefa')

    if (inputEditar.length === 0) {
        window.alert('Nenhum campo feito para ser editado!')
        return
    }

    for (let c = 0; c < inputEditar.length; c++) {
        inputEditar[c].disabled = false
    }
}

function salvarElementos() {
    const inputEditar = document.querySelectorAll('.inputTarefa')

    for (let c = 0; c < inputEditar.length; c++) {

        const inputDelet = document.createElement('button')
        input.type = 'button'
        const ol = document.querySelectorAll(`.liTarefa${c}`)
        inputDelet.innerText = ('TESTE')
        ol[c].appendChild(inputDelet)

        inputEditar[c].disabled = true
    }
}