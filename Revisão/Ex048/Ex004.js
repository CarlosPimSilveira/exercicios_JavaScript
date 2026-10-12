// Ex 85 — Sistema de cadastro de usuários
const newPessoa = {
    Nome: 'Carlos',
    Idade: 27,
    Email: 'email@gmail.com.br'
}

const pessoasCadastradas = [
    {Nome: 'Eduardo', Idade: 35, Email: 'eduardinhofake@gmail.com'}
]

function cadUsuario (newUsuario) {
    pessoasCadastradas.push({Nome: newUsuario.nome , Idade: newUsuario.Idade, Email: newUsuario.email})
}

cadUsuario(newPessoa)
