const nome = 'luiz'
const sobrenome = 'miranda'

const falaNome = () => nome + ' ' + sobrenome

//module.exports.nome = nome
//module.exports.sobrenome = sobrenome
//module.exports.falaNome = falaNome
// Mesma coisa
// Não precisa ter o nome da const
exports.NOME = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome
this.qualquerCoisa = 'O que eu quiser exportar' // faz referencia ao objeto exports

//console.log(module.exports)

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}

exports.Pessoa = Pessoa