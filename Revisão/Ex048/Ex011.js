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

function listarPessoas(){
    if (cadPessoas.length === 0) {
        console.log('Ninguem cadastrado!')
        return
    }

    cadPessoas.forEach((pessoas) => {
        console.log(`Nome: ${pessoas.Nome} telefone: ${pessoas.Telefone}`)
    }) 
}

cadNovaPessoa('Larissa', '98999-9999')
cadNovaPessoa('Maria', '99999-9999')
cadNovaPessoa('Jose', '98799-9999')
cadNovaPessoa('Carlos', '98769-9999')
cadNovaPessoa('Pedro', '98765-9999')

listarPessoas()
