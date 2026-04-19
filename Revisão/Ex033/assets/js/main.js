

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