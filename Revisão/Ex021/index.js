let corpo = document.getElementById('corpo')
let divCor = corpo.querySelector('.corpo_color')
let posX = 0
let velX = 2
let posY = 0
let velY = 2

divCor.addEventListener('mouseenter', function() {
    divCor.style.backgroundColor = 'black'
    divCor.style.transition = '0.5s'
})

divCor.addEventListener('mouseleave', function() {
    divCor.style.backgroundColor = 'red'
    divCor.style.transition = '0.5s' // Aparentemente isso quebra o codigo
}) 

function animar() {
    // X
    posX += velX
    if (posX >= 60) {
        posX = 60
        velX = -2
    }
    if (posX <= 0) {
        posX = 0
        velX = 2
    }

    // Y
    posY += velY
    if (posY >= 60) {
        posY = 60
        velY = -2
    }
    if (posY <= 0) {
        posY = 0
        velY = 2
    }

    divCor.style.transform = `translate(${posX}px, ${posY}px)`
    requestAnimationFrame(animar)
}

animar()
