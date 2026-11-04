// Agenda telefonica!
let cadPessoas = []

function confereNome(nome) {
    return typeof nome !== 'string' || nome.trim() === ""
}

function confereTelefone(telefone) {
    return !telefone || typeof telefone !== 'string' || telefone.trim() === ""
}

function cadVazio() {
    return cadPessoas.length === 0
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
    if (cadVazio()) {
        console.log('Ninguem cadastrado!')
        return
    }

    cadPessoas.forEach((pessoa) => {
        console.log(`Nome: ${pessoa.Nome} telefone: ${pessoa.Telefone}`)
    }) 
}

function verificaPessoa(nome) {
    const pessoaEncontrada = cadPessoas.find(pessoa => nome === pessoa.nome);

    return {
        existe: pessoaEncontrada !== undefined,
        Nome: pessoaEncontrada          
    };
}

function buscarPessoa(nome) {
    let achouPessoa = false

    achouPessoa = verificaPessoa(nome)

    if (achouPessoa) {
        const pessoa = achouPessoa.Nome
        const tel = achouPessoa.Telefone
        console.log(`Nome: ${pessoa} - Tel: ${tel}`);
    } else {
        console.log("Pessoa não encontrada.");
    }
}

cadNovaPessoa('Larissa', '98999-9999')
cadNovaPessoa('Maria', '99999-9999')
cadNovaPessoa('Jose', '98799-9999')
cadNovaPessoa('Carlos', '98769-9999')
cadNovaPessoa('Pedro', '98765-9999')

listarPessoas()
buscarPessoa('carlos')


/*
let indiceEncontrado = -1
    cadPessoas.forEach((pessoa, index) => {
        if (pessoa.Nome.toLowerCase() === nome.toLowerCase()) {
            achouPessoa = true;
            indiceEncontrado = index; 
        }
    });*/