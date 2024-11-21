function saudacao(nome) {
    //console.log(`Bom dia! ${nome}!`)
    return `Bom dia! ${nome}!` //para retornar um valor
}

const variavel = saudacao('Luiz')
console.log(variavel) //recebe o retorno da function

function soma(x = 1, y = 1) { //caso a function nao receba valor deixamos o padrão
    const resultado = x + y
    return resultado
}

console.log(soma(2, 2))
//console.log(resultado) //nao conseguimos acessar pois resultado faz parte do corpo da function

const resultado = soma(2, 2)
console.log(resultado)

//Function anonima
const raiz = function(n) {
    return n ** 0.5
}; //nesse caso precisamos sim de um ; para fechar a function

console.log(raiz(9))

///////////////

//arrow function
const raiz1 = (n) => n ** 0.5 //isso aqui tudo agora é uma function porem precisa ter 1 linha! 

console.log(raiz(16))

///////////////