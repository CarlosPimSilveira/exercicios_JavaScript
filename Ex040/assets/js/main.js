const form = document.querySelector('#form')

form.addEventListener('submit', function(e) { //e de evento | estamos escutando o evento submit
    e.preventDefault(); // desligamos o evento de envio 
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value) //convertendo para numero
    const altura = Number(inputAltura.value) //convertendo para numero

    if (!peso) { //se o peso for falso
        setResultado('Peso inválido!', false)
        return //para parar o codigo interromper a function
    }

    if (!altura) {
        setResultado('Altura inválida', false)
        return
    }
    
    const imc = getImc(peso, altura);
    const nivelIcm = getNivelImc(imc)
    const msg = `Seu IMC é ${imc} (${nivelIcm}).`;

    setResultado(msg, true);
})

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];    
    if (imc >= 34.9) return nivel[4];    
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];    
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

function criaP() {
    const p = document.createElement('p')  //criando elemento p
    //p.classList.add('paragrafo-resultado') //aproveitamos o p que foi criado via js e adicionamos uma class para ele.
    return p
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML  = ''

    const p = criaP();

    if(isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    } 

    p.innerHTML = msg;
    resultado.appendChild(p)

    //resultado.appendChild(p) //insere esse elemento(p) no caso o elemento que criamos via js
}