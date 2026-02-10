function saudacao(nome) {
    return `Bom dia ${nome}`
} 
const variavel = saudacao('luiz')
console.log(variavel)

function soma(n1 = 0, n2 = 0) { //caso não seja enviado valor para o parametro
    const resultado = n1 + n2
    return resultado
}
console.log(soma(10, 5))

function protegido() {
    const prot = 'Prot é uma variavel que esta protegido e visivel dentro apenas da function'
    return prot
    console.log('E tudo abaixo do return não é execultado')
}
console.log(protegido())

