const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor

for (let p of ps) {
    //em js nao podemos ter o traço ou algo do tipo (background-color) por esse motivo escrevemos backgroundColor em camelcase
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF'
} 