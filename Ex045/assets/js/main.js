const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

const dataFormatada = new Intl.DateTimeFormat('pt-BR', opcoes).format(data);
h1.innerHTML = dataFormatada;
 