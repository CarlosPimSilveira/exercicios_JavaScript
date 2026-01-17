// DOM

//var p1 = window.document.getElementsByTagName('p')
// seleciona TODOS OS ELEMENTOS P

var corpo = window.document.body
corpo.style.backgroundColor = 'black'

var p1 = window.document.getElementsByTagName('p')[1]
// fazendo dessa forma pego apenas o segundo
p1.innerText = 'Está escrito assim: ' + p1.innerText
p1.style.color = 'blue' 

var d = window.document.getElementById('msg')
d.style.background = 'green'
//d.innerText = 'Estou aguardando...'
window.document.getElementById('msg').innerText = 'Olá'
// class ponto id #
var d1 = window.document.querySelector('div.msg1')
d1.style.background = 'blue'