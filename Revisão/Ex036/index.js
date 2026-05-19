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

    const input = document.createElement('input')
    input.type = 'text'

    itemLista.addEventListener('dblclick', function () {

    const btnAdicionar = document.querySelector('.btnAdicionar')
    const btnEditar = document.querySelector('.btnEditar')

    btnAdicionar.disabled = true
    btnEditar.disabled = true

    input.disabled = false
    input.focus()
    })

    input.classList.add(`pLiTarefa${contador}`, 'inputTarefa')

    itemLista.appendChild(input)
    lista.appendChild(itemLista)

    const btnAdicionar = document.querySelector('.btnAdicionar')
    const btnEditar = document.querySelector('.btnEditar')

    btnAdicionar.disabled = true
    btnEditar.disabled = true

    input.focus()

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const valor = input.value.trim()

            if (valor === '') {
                itemLista.remove()

                btnAdicionar.disabled = false
                btnEditar.disabled = false

                return
            }

            input.disabled = true
            btnAdicionar.disabled = false
            btnEditar.disabled = false

            criaElemento()
        }
    })
    input.addEventListener('blur', function () {
        finalizarCriacao()
    })

    function finalizarCriacao() {
        const valor = input.value.trim()

        if (valor === '') {
            itemLista.remove()
        } else {
            input.disabled = true
        }

        btnAdicionar.disabled = false
        btnEditar.disabled = false
    }

    contador++
}

function editaElementos() {
    const inputEditar = document.querySelectorAll('.inputTarefa')

    if (inputEditar.length === 0) {
        window.alert('Nenhum campo feito para ser editado!')
        return
    }

    const btnAdicionar = document.querySelector('.btnAdicionar')
    const btnEditar = document.querySelector('.btnEditar')

    btnAdicionar.disabled = true
    btnEditar.disabled = true

    for (let c = 0; c < inputEditar.length; c++) {
        const li = inputEditar[c].parentElement
        if (!li.querySelector('.btnDel')) {
            const inputDelet = document.createElement('button')

            inputDelet.classList.add('btnDel')
            inputDelet.innerText = 'X'

            inputDelet.addEventListener('click', function () {
                li.remove()
            })

            li.appendChild(inputDelet)
        }

        inputEditar[c].disabled = false
    }
}

function salvarElementos() {
    const inputEditar = document.querySelectorAll('.inputTarefa')
    const btnAdicionar = document.querySelector('.btnAdicionar')
    const btnEditar = document.querySelector('.btnEditar')

    for (let c = 0; c < inputEditar.length; c++) {

        const li = inputEditar[c].parentElement
        const btnDel = li.querySelector('.btnDel')

        if (btnDel) {
            btnDel.remove()
        }

        inputEditar[c].disabled = true
    }
    btnAdicionar.disabled = false
    btnEditar.disabled = false
}