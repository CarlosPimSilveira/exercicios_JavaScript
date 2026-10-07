function rand(min, max) {
    min *= 1
    max *= 1
    return Math.floor(Math.random() * (max - min) + min)
}

let numAdivinhar = rand(1, 10)

function verificar() {
    const txtNumAdv = document.querySelector('#txtNumAdv')

    const advNum = document.querySelector('.advNum')
    const respostaAnterior = document.querySelector('.resposta')

    if (respostaAnterior) {
        respostaAnterior.remove()
    }

    const divResp = document.createElement('div')
    const pResp = document.createElement('p')

    if (isNaN(txtNumAdv.value)) {
        alert('Digite um numero!')
        txtNumAdv.value = ''
        txtNumAdv.focus()
        return
    }

    divResp.classList.add('resposta')

    if (txtNumAdv.value == numAdivinhar) {
        pResp.textContent = 'Numero certo!!'
        numAdivinhar = rand(1, 10)
    } else {
        pResp.textContent = 'Numero errado tente novamente!!'
    }

    txtNumAdv.value = ''
    txtNumAdv.focus()
    divResp.appendChild(pResp)
    advNum.appendChild(divResp)
}