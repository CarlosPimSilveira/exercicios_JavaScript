function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = [];

//    form.onsubmit = function (evento) {
//        evento.preventDefault();
//        Estamos falando para o navegador previnir o evento ou seja não enviar o        formulario ele nao faz o evento de costume!
//        alert(1)
//        console.log('Foi enviado!')
//    };

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEventoForm);
//  estamos pegando o form e adicionando um "escutador de eventos" que fica escultando o evento de submit ai depois recebe uma function para realizar nossa ação! forma mais nova de fazer
}

meuEscopo();