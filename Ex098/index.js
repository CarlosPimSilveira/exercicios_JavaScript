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

// Codigo em cadeia muito longo e trabalhoso
esperaAi('Fase 1', rand(0, 3)) // espera ai retorna uma promise
    .then(valor => {
        console.log(valor)
        return esperaAi('Fase 2', rand(0, 3))
    })
    .then(fase => {
        console.log(fase)
        return esperaAi('Fase 3', rand(0, 3))
    })
    .then(fase => {
        console.log(fase)
        return fase
    })
    .then(fase => {
        console.log('Terminamos na fase: ', fase)
    })
    .catch(e => console.log(e))

// Async e Await
//  Muito mais limpo e melhor para entender
async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1 Async e Await', rand(0, 3))
        console.log(fase1)

        const fase2 = await esperaAi(2, rand(0, 3))
        console.log(fase2)

        const fase3 = await esperaAi('Fase 3 Async e Await', rand(0, 3))
        console.log(fase3)

        console.log('Terminamos na fase: ', fase3)
    } catch(e) {
        console.log(e)
    }
}

executa()

/*
    pendente - foi execultada mas ainda nao retornou valor (pending)
    fulfilled - representação de resolvida
    rejected - uma rejeição
*/