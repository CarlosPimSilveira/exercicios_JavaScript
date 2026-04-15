const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')
const estilosBody = getComputedStyle(document.body) 
// Pega tudo que tem de estilo no body
const backgoundColorBody = estilosBody.backgroundColor


for (let p of ps) {
    p.style.backgroundColor = backgoundColorBody
}


