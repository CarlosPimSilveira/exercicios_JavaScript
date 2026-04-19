const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi() {
    const li = document.createElement('li')
    return li
}

//pegando o evento de click da tecla enter!
inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return //verifica se é diferente de vazio!
        criaTarefa(inputTarefa.value)
    }
})

function limpaInput() {
    inputTarefa.value = ''
    inputTarefa.focus()
}

function criaBotaoApagar(li) {
    li.innerHTML += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar') //adicionando o atributo class! com setAttribute podemos adicionar qualquer um!
    botaoApagar.setAttribute('title', 'Apagar esta tarefa!')
    li.appendChild(botaoApagar)
}

function criaTarefa(textoInput) {
    const li = criaLi()
    li.innerHTML = textoInput
    tarefas.appendChild(li)
    limpaInput()
    criaBotaoApagar(li)
    salvarTarefas()
}

//padrão para uma function anonima! no segundo parametro é obrigatorio ter uma function 
btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return //verifica se é diferente de vazio!
    criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function(e) {
    const el = e.target

    //se esse botão tem a class apagar!
    if (el.classList.contains('apagar')) {
        el.parentElement.remove() //do meu elemento apague o Pai dele! o que faz ele ser removido tambem pois o pai(mae) foi removido!
        salvarTarefas()
    }
})

function salvarTarefas() {
    //quero pegar as tarefas todas!
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText
        //apagando a palavra apagar do botao que vinha! e tambem o trim para limpar o espaço que estava vindo vazio!
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }

    //estamos salvando as tarefas mesmo se o navegador for fechado fica salvo! parece um array mas nao é!
    const tarefasJSON = JSON.stringify(listaDeTarefas) //converte um objeto para string!
    localStorage.setItem('tarefas', tarefasJSON) //nome para recuperar depois! o segundo parametro deve ser string!
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)//converte devolta para um objeto javascript

    for (let tarefa of listaDeTarefas)  {
        criaTarefa(tarefa)
    }
}

adicionaTarefasSalvas()