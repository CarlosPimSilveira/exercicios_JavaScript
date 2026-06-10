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
    for (let c = 0; c < Dig; c++) {
        arrayABC.push(alfabeto[c])
    }
    resposta.innerText = arrayABC.toString()
    document.body.appendChild(resposta)
}
