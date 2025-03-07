
function relogio() {
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }

    const relogio = document.querySelector('.relogio')
    const iniciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar')
    let segundos = 0
    let timer

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++
            relogio.innerHTML = criaHoraDosSegundos(segundos)
        }, 1000)
    }

    document.addEventListener('click', function (evento) {
        const el = evento.target

        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer)
            iniciaRelogio()
        }

        if (el.classList.contains('pausar')) {
            clearInterval(timer)
            relogio.classList.add('pausado')
        }

        if (el.classList.contains('zerar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer)
            relogio.innerHTML = '00:00:00'
            segundos = 0
        }
    })
}

relogio()

// Tiramos cada evanto individual de cada botão e fizemos um "observador geral" que caso o usuario aperte dentro de algo que tenha a class definida entao isso inicia os eventos!

//iniciar.addEventListener('click', function(event) {
//    relogio.classList.remove('pausado')
//    clearInterval(timer)
//    iniciaRelogio()
//})

//pausar.addEventListener('click', function(event) {
//    clearInterval(timer)
//    relogio.classList.add('pausado')
//})

//zerar.addEventListener('click', function(event) {
//    relogio.classList.remove('pausado')
//    clearInterval(timer)
//    relogio.innerHTML = '00:00:00'
//    segundos = 0
//})