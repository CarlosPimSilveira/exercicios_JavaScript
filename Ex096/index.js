// Promises - promessa

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

esperaAi('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta)
        return esperaAi(111111, rand(1, 3)) // se ocorre um erro vai para o reject que cai no catch 
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Frase 3', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
    })
    .then(() => {
        console.log('Eu serei o último a ser exibido.')
    })
    .catch(e => {
        console.log('Erro', e)
    }) 
// then é execultado quando resolve é chamado

console.log('Isso aqui será exibido antes de qualquer promisse')