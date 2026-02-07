let corpo = document.getElementById('corpo')
let divCor = corpo.querySelector('.corpo_color')
let posicao = 0
let velocidade = 2

divCor.addEventListener('mouseenter', function() {
    divCor.style.backgroundColor = 'black'
    divCor.style.transition = '0.5s'
})

divCor.addEventListener('mouseleave', function() {
    divCor.style.backgroundColor = 'red'
    divCor.style.transition = '0.5s' // Aparentemente isso quebra o codigo
}) 

function animar() {

    posicao += velocidade

    if (posicao >= 60) {
        posicao = 60
        velocidade = -2
    }

    if (posicao <= 0) {
        posicao = 0
        velocidade = 2
    }

    divCor.style.transform = `translateX(${posicao}px)`

    requestAnimationFrame(animar)
}
animar()



    /*
    posicao += velocidade;
    if (posicao > 60) {
        velocidade = -velocidade
        divCor.style.transform = `translateX(${posicao}px)`
    } else {
        divCor.style.transform = `translateX(${posicao}px)`
    }
    */
