// Agenda telefonica!
let cadPessoas = []

function confereNome(nome) {
    if (typeof nome !== 'string' || nome.trim() === "")
        return console.log('Cadastro invalido! titulo ou autor errados!')
}

function cadNovaPessoa(nome, telefone) {
    confereNome(nome)

    cadPessoas.push({
        Nome: nome,
        Telefone: telefone
    })
}


cadNovaPessoa('Maria', 1999999-9999)

console.log(cadPessoas)



