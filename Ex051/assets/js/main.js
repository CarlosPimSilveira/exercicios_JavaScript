const elementos = [
    {tag: 'p', texto: 'Frase 1'},       //0
    {tag: 'div', texto: 'Frase 2'},     //1
    {tag: 'footer', texto: 'Frase 3'},  //2
    {tag: 'section', texto: 'Frase 4'}, //3
];

const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i] //associação via desestruturação
    let tagCriada = document.createElement(tag)
    //tagCriada.innerHTML = texto
    tagCriada.innerText = texto
    div.appendChild(tagCriada)
}

container.appendChild(div)