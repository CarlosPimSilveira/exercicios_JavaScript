// Escopo léxico

// se eu busco uma variavel e ela não esta dentro da função então ai ele busca no pai dela! e por ai vai!
const nome = 'Luiz' 

function falaNome() {
    console.log(nome)
}

falaNome();

function usaFalaNome() {
    const nome = 'otavio'
    falaNome()
}

usaFalaNome()