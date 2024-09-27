var a = window.document.getElementById('area')
// colocamos a declaração da var area fora da function não é a melhor coisa a se fazer da problema de uso de memoria mas por hora ok. dessa forma a funciona em qualquer lugar

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)
// criamos o evento no addEventListener para deixar o html mais limpo

function clicar() {
  // ligamos a tag div pelo id na var a
    a.innerText = 'Clicou!'
    a.style.background = 'red'
} 

function entrar() {
    a.innerText = 'Entrou!'
}

function sair() {
    a.innerText = 'Saiu!'
    a.style.background = 'green'
}