let numAleatorio = rand()

function adivinharNum() {
    let txtNum = document.querySelector('.txtNum')
    let numReal = Number(txtNum.value)
    let respostas = document.querySelector('.respostas')
    respostas.innerHTML = ''

    if (isNaN(numReal)) {
        window.alert('Digite um numero!');
        return
    }

    if (numReal === numAleatorio) {
        const p = document.createElement('p')
        p.innerText = 'Certo!'
        respostas.appendChild(p);
        numAleatorio = rand()
    } else if (numReal < numAleatorio) {
        const p = document.createElement('p')
        p.innerText = 'Um numero um pouco maior!'
        respostas.appendChild(p);
    } else {
        const p = document.createElement('p')
        p.innerText = 'Um numero um pouco menor!'
        respostas.appendChild(p);
    }
    console.log(numAleatorio)
    txtNum.value = ''
    txtNum.focus()
}

function rand(min = 1, max = 11) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}