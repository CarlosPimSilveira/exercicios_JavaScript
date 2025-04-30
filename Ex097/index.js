// Métodos útes para promises
function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Bad value')

        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}
// Promise.all - Promise.race - Promise.resolve - Promise.reject

// Promise.all -> passamos um array para ele com promessa e ele vai te entregar 1 promessa so com os valores em forma de array
const promises = ['Primeiro valor', 
                    esperaAi('Promise 1', 3000),
                    esperaAi('Promise 2', 500),
                    esperaAi('Promise 3', 1000),
                    'Outro valor'
]

Promise.all(promises)
    .then(function(valor) {
        console.log(valor)
    })
    .catch(function(erro) {
        console.log(erro)
    })

