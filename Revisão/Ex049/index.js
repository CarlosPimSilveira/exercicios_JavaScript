function rand(min, max) {
    min *= 1
    max *= 1
    return Math.floor(Math.random() * (max - min) + min)
}

const numAdivinhar = rand(1, 10)

function verificar() {
    const txtNumAdv = document.querySelector('#txtNumAdv').value
    const advNum = document.querySelector('.advNum')
    const divResp = document.createElement('div')
    const pResp = document.createElement('p')
    console.log(numAdivinhar)

    if (divResp) {
        pResp.remove()
        divResp.remove()
        
    }

    if (txtNumAdv == numAdivinhar) {
        pResp.textContent = 'Numero certo!!'
    } else {
        pResp.textContent = 'Numero errado tente novamente!!'
    }
    divResp.appendChild(pResp)
    advNum.appendChild(divResp)
}
