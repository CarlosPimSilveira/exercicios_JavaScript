// vamos fazer uma requisição
// importando apenas o falanome

//const falaNome = require('./mod1').falaNome
//console.log(falaNome())

//const { NOME , sobrenome, falaNome } = require('./mod1')
//console.log(NOME, sobrenome)
//console.log(falaNome())


//const mod1 = require('./mod1')
//console.log(mod1)
//console.log(mod1.falaNome())

const path = require('path')
const { Pessoa } = require('./mod1')
const p1 = new Pessoa('Carlos')

console.log(p1)