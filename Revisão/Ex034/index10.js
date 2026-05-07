function adivinharNum() {
    let txtNum = document.querySelector('.txtNum')
    let numAleatorio = rand()

    if (isNaN(Number(txtNum.value))) {
        window.alert('Digite um numero!'); 
        return
    }

    if (true) {
        const p = document.createElement('p')
        p.innerText = 'Certo!'
        p.appendChild;
    }
    txtNum === numAleatorio
    txtNum.value = ''
}

function rand(min = 1, max = 10) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}