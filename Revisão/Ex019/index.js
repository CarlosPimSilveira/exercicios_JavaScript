let num = Number(window.prompt('Digite um número: '))

let h1Num = window.document.getElementById('h1Num')
h1Num.innerText += ' ' + num

function criaP() {
    for (let cont = 1; cont <= 6; cont++) {

        var p = document.createElement('p')
        p.setAttribute("id", "p" + cont)
        document.body.appendChild(p)

        /*

        switch (cont) {

            case 1:
                p.innerText = 'Raiz quadrada: ' + (num ** 0.5)
                break

            case 2:
                p.innerText = `${num} é inteiro? ${Number.isInteger(num)}`
                break

            case 3:
                p.innerText = `É NaN: ${Number.isNaN(num)}`
                break

            case 4:
                p.innerText = `Arredondando para baixo: ${Math.floor(num)}`
                break

            case 5:
                p.innerText = `Arredondando para cima: ${Math.ceil(num)}`
                break

            case 6:
                p.innerText = `Com duas casas decimais: ${num.toFixed(2)}`
                break
        }*/
    } 
}

function mostrarResultados(num) {
    document.getElementById("p1").innerText = `Raiz quadrada: ${Math.sqrt(num)}`
    document.getElementById("p2").innerText = `${num} é inteiro? ${Number.isInteger(num)}`
    document.getElementById("p3").innerText = `É NaN? ${Number.isNaN(num)}`
    document.getElementById("p4").innerText = `Arredondando para baixo: ${Math.floor(num)}`
    document.getElementById("p5").innerText = `Arredondando para cima: ${Math.ceil(num)}`
    document.getElementById("p6").innerText = `Com duas casas decimais: ${num.toFixed(2)}`
}

criaP()
mostrarResultados(num)


/*
// Raiz quadrada
var p1 = document.getElementById('p1')
p1.innerText = 'Raiz quadrada: ' + (num ** 0.5)

// Inteiro:
var p2 = document.getElementById('p2')
p2.innerText = `${num} é inteiro? ${Number.isInteger(num)}`

// NaN
var p3 = document.getElementById('p3')
p3.innerText = `é NaN: ${Number.isNaN(num)}`

// Arredondando para baixo
var p4 = document.getElementById('p4')
p4.innerText = `Arredondando para baixo: ${Math.floor(num)}`

// Arredondando para cima
var p5 = document.getElementById('p5')
p5.innerText = `Arredondando para cima: ${Math.ceil(num)}`

// Duas casas decimais
var p6 = document.getElementById('p6')
p6.innerText = `Com duas casas decimais: ${num.toFixed(2)}`

/*
// Raiz quadrada
var p1 = document.createElement('p')
p1.setAttribute('id', 'p1')
p1.innerText = 'Raiz quadrada: ' + num ** 0.5
document.body.appendChild(p1)

// Inteiro:
var p2 = document.createElement('p')
p2.setAttribute('id', 'p2')
p2.innerText = `${num} é inteiro? ${Number.isInteger(num)}`
document.body.appendChild(p2)

// NaN
var p3 = document.createElement('p')
p3.setAttribute('id', 'p3')
p3.innerText = `é NaN: ${Number.isNaN(num)}`
document.body.appendChild(p3)

// Arredondando para baixo
var p4 = document.createElement('p')
p4.setAttribute('id', 'p4')
p4.innerText = `Arredondando para baixo: ${Math.floor(num)}`
document.body.appendChild(p4)

// Arredondando para cima
var p5 = document.createElement('p')
p5.setAttribute('id', 'p5')
p5.innerText = `Arredondando para cima: ${Math.ceil(num)}`
document.body.appendChild(p5)

// duas casas decimais
var p6 = document.createElement('p')
p6.setAttribute('id', 'p6')
p6.innerText = `Com duas casas decimais: ${num.toFixed(2)}`
document.body.appendChild(p6)
*/