// Ex 85 — Sistema de cadastro de usuários

// Pessoas para cadastrar!
const newPessoa = {
    Nome: 'Carlos',
    Idade: 27,
    Email: 'email@gmail.com.br'
}

// Pessoas ja cadastradas
const pessoasCadastradas = [
    {Nome: 'Eduardo', Idade: 35, Email: 'eduardinhofake@gmail.com'}
]

// Função que faz o cadastro da pessoa que ainda nao foi cadastrada!
function cadUsuario (newUsuario) {
    pessoasCadastradas.push({Nome: newUsuario.Nome , Idade: newUsuario.Idade, Email: newUsuario.Email})
}

// Função que exibe pessoas cadastradas!
function listarUsuarios(pessoasCadastradas) {
    for (let c = 0; c < pessoasCadastradas.length; c++) {
        console.log(`Nome: ` + pessoasCadastradas[c].Nome + ` | Idade: ` + pessoasCadastradas[c].Idade + ` | Email: ` + pessoasCadastradas[c].Email)
    }
}

// Chama a função que cadastra!
cadUsuario(newPessoa)

// Chama a função que exibe os cadastrados
listarUsuarios(pessoasCadastradas)

