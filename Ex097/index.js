// Métodos útes para promises
function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('Cai no ERRO')
            return
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise')
            return
        }, tempo)
    })
}
// Promise.all - Promise.race - Promise.resolve - Promise.reject

// Promise.all -> passamos um array para ele com promessa e ele vai te entregar 1 promessa so com os valores em forma de array

const promises = [//'Primeiro valor', 
                    esperaAi('Promise 1', 3000),
                    esperaAi('Promise 2', 500),
                    esperaAi('Promise 3', 1000),
                    //esperaAi(1000, 1000),
                    //'Outro valor'
]

Promise.all(promises)
    .then(function(valor) {
        console.log(valor)
    })
    .catch(function(erro) {
        console.log(erro)
    })

// Promise.race -> no caso dele é como uma corrida quem resolver primeiro vc entrega
// no caso o retorno vai ser a promise 2 porem veja ele continua execultando o resto do codigo a unica coisa que ele faz é devolver a mais rapida
Promise.race(promises)
    .then(function(valor) {
        console.log(valor)
    })
    .catch(function(erro) {
        console.log(erro)
    })

// Promise.resolve - Promise.reject
// Aqui a function espera uma promise 
function baixaPagina() {
    const emCache = false

    if(emCache) {
        return Promise.resolve('Página em cache')
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log('ERRO', e))