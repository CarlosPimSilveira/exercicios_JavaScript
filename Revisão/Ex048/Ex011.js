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
    const pessoaEncontrada = cadPessoas.find(pessoa => nome.toLowerCase() === pessoa.Nome.toLowerCase());

    return {
        dados: pessoaEncontrada
    };
}

function buscarPessoa(nome) {
    const resultado = verificaPessoa(nome);

    if (resultado.dados) {
        const pessoa = resultado.dados.Nome;
        const tel = resultado.dados.Telefone;

        console.log(`Nome: ${pessoa} - Tel: ${tel}`);
    } else {
        console.log("Pessoa não encontrada.");
    }
}

function editarPessoas(nome, novoNome, novoTel) {
    if (cadVazio()) {
        console.log('Ninguem cadastrado!')
        return
    }

    const acharPessoa = verificaPessoa(nome)

    if (acharPessoa.dados) {
        acharPessoa.dados.Nome = novoNome
        acharPessoa.dados.Telefone = novoTel
    } else {
        console.log("Pessoa não encontrada.");
    }
}

function excluirPessoas(nome) {
    if (cadVazio()) {
        console.log('Ninguem cadastrado!')
        return
    }

    const acharPessoa = verificaPessoa(nome)

    if (acharPessoa.dados) {
        cadPessoas = cadPessoas.filter(pessoa => pessoa.Nome.toLowerCase() !== nome.toLowerCase())
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

editarPessoas('jose', 'jose Antonio', '9999-98799')
console.log('---------------------')
excluirPessoas('maria')
listarPessoas()





