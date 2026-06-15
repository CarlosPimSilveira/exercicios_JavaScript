/* 
    Exemplo ao digitar 3 ele deve retornar um array com A, B, C
    20 - A, B, C, D, E, F, G, H e por ai vai ate o numero 20 do abc
*/

let alfabeto = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

const resposta = document.createElement('h1')

function abc() {
    let Dig = document.querySelector('.abc').value
    let arrayABC = []

    if (Dig >= 27) {
        window.alert('Valor invalido o codigo aceita apenas 1 - 26')
        return
    }
    for (let c = 0; c < Dig; c++) {
        arrayABC.push(alfabeto[c])
    }
    resposta.innerText = arrayABC.toString()
    document.querySelector('.divCent').appendChild(resposta)

    let campoFocus = document.querySelector('.abc')
    campoFocus.value = ''
    campoFocus.focus()
}

const starsContainer = document.getElementById('stars');

for (let i = 0; i < 150; i++) {
    const star = document.createElement('div');

    star.classList.add('star');

    const size = Math.random() * 3 + 1;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;

    starsContainer.appendChild(star);

    piscar(star);
}

function piscar(star) {
    function alterar() {
        star.style.opacity = Math.random() > 0.5 ? '1' : '0';

        const proximaMudanca = Math.random() * 3000 + 500;

        setTimeout(alterar, proximaMudanca);
    }

    alterar();
}