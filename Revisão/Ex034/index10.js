function adivinharNum() {
    let txtNum = document.querySelector('.txtNum')
    let numReal = Number(txtNum.value)
    let numAleatorio = 6//rand()
    let respostas = document.querySelector('.respostas')

    if (isNaN(numReal)) {
        window.alert('Digite um numero!'); 
        return
    }

    if (numReal === numAleatorio) {
        const p = document.createElement('p')
        p.innerText = 'Certo!'
        respostas.appendChild(p);
    }
    console.log(numAleatorio)
    txtNum.value = ''
    txtNum.focus()
}

function rand(min = 1, max = 10) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}