const numero = Number(prompt('Digite um número: ')) 
const numeroTitulo = document.getElementById('numero-titulo')
const divTexto = document.getElementById('texto')

numeroTitulo.innerHTML = numero
divTexto.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}</p>`
divTexto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`
divTexto.innerHTML += `<p>é NaN: ${Number.isNaN(numero)}</p>`
divTexto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`
divTexto.innerHTML += `<p>Arredondando para Cima: ${Math.ceil(numero)}</p>`
divTexto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`