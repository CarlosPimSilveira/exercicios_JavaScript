// Agenda telefonica!
let cadPessoas = []

function confereNome(nome) {
    return typeof nome !== 'string' || nome.trim() === ""
}

function confereTelefone(telefone) {
    return !telefone || typeof telefone !== 'string' || telefone.trim() === ""
}

function cadNovaPessoa(nome, telefone) {
    if (confereNome(nome)) {
        console.log("Erro: Nome inválido.");
        return
    }

    if (confereTelefone(telefone)) {
        console.log("Erro: Telefone inválido.");
        return false;
    }

    cadPessoas.push({
        Nome: nome,
        Telefone: telefone
    })
}


cadNovaPessoa('Maria', '99999-9999')

console.log(cadPessoas)



