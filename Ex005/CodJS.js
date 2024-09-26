var corpo = window.document.body
corpo.style.background = 'skyblue'
//pegamos o corpo numa variavel e entao mudamos a cor para um skyblue

var p1 = window.document.getElementsByTagName('p')['0']
p1.style.color = 'blue'
// Aqui estamos mudando a cor do paragrafo para a cor azul por meio de js


// tag
var p2 = window.document.getElementsByTagName('p')[1]
document.write(p2.innerHTML + '<br>' ) 
document.write(p2.innerText)
// o innerhtml pega a edição da tag p no caso pega a tag strong que faz parte da tag p ja o innertext pega apenas o texto e nao o complemento todo.
// innerhtml pega o pai e os filhos juntos 
// podemos concatenar a tag br para pular uma linha em js

//---- id
var d = window.document.getElementById('msg')
d.style.background = 'green'
window.document.getElementById('msg').innerText = 'Olá'
//d.innerText = 'Estou aguardando...'

//---- name
var d1 = window.document.getElementsByName('nmsg')[0]
d1.innerText = 'Nome ' + d.innerText

//---- classe
var d2 = window.document.getElementsByClassName('cmsg')[0]
d2.innerText = 'Class ' + d1.innerText

// seletor
var d3 = window.document.querySelector('div#msg')
d.style.color = 'blue'

//----
//window.document.write('Está escrito assim: ' + p1.innerText);
// Estamos selecionando as tags <p> pelo js 
// o valor entre [] serve para dizer qual dos paragrafos queremos selecionar sem ele iriamos selecionar todos. nesse caso estamos selecionando o primeiro p que ele achar caso fosse o segundo so colocar o numero 1 e por ai vai.
// p1 passa a receber o valor da tag <p> recebendo o texto "Aqui vai o resultado" e entao estamos imprimindo ele na tela junto do texto "Esta escrito assim: "

//window.document.write(window.document.URL)
// por meio da arvore DOM conseguimos ter acesso a varios componentes.
// podemos navegar pela arvore DOM navegando pelos elementos.
//-----

//window.document.write('Ola, mundo!')
// window seria a janela que inclusive faz parte da minha arvore
// document é o documento em si que é filho do window 
// a gente foi por js ou por DOM adicionando compoentens