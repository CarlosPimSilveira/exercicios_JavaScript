function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') { 
            reject('Cai no erro')
            return
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise')
        }, tempo)
    })
}

// Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
   // 'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    esperaAi('Promise 4', 1500)
   // esperaAi(1000, 1000),
   // 'Outro valor'
]

Promise.all(promises)
    .then(function(valor) {
        console.log(valor)
    })
    .catch(function(erro) {
        console.log(erro)
    })

// Pega o resultado da Promise que terminar primeiro.
// As outras Promises continuam sendo executadas normalmente.
// O Promise.race() apenas ignora os resultados delas.
Promise.race(promises)
    .then(function(valor) {
        console.log(valor + ' - Pego a com menor tempo para execultar e paro')
    })
    .catch(function(erro) {
        console.log(erro)
    })

function baixaPagina() {
    const emCache = true;

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
    .catch(e => {
        console.log(e)
    })