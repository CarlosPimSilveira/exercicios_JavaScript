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

cadUsuario(newPessoa)
