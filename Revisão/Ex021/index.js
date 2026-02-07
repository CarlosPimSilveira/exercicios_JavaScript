let corpo = document.getElementById('corpo')
let divCor = corpo.querySelector('.corpo_color')
let posX = 0
let velX = 2


divCor.addEventListener('mouseenter', function() {
    divCor.style.backgroundColor = 'black'
    divCor.style.transition = '0.5s'
})

divCor.addEventListener('mouseleave', function() {
    divCor.style.backgroundColor = 'red'
    divCor.style.transition = '0.5s' // Aparentemente isso quebra o codigo
}) 

function animar() {
    posX += velX
    if (posX >= 60) {
        posX = 60
        velX = -2
    }
    if (posX <= 0) {
        posX = 0
        velX = 2
    }
    divCor.style.transform = `translateX(${posX}px)`
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
