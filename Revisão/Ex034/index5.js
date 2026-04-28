// Escopo Léxico
const nome = 'Luiz'

function falaNome() {
    const nome = 'Otávio'
    console.log(nome)
} 

function usaFalaNome() {
    falaNome()
}

usaFalaNome()