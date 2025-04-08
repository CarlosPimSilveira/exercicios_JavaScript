// Manipulando os Prototypes
// new Object -> object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
}

const objB = {
    chaveB: 'B'
    // __proto__: objA
}

const objC = {
    chaveB: 'C'
    // __proto__: objA
}

//Agora o __proto__ do objeto B tem a chaveA o que faz podermos acessar a chaveA pelo objeto B
Object.setPrototypeOf(objB, objA)
//O prototype do objecto C tem o prototype do objeto B 
//Agora dentro do objeto C e B temos a chaveA fazendo uma cadeia 
Object.setPrototypeOf(objC, objB)
console.log(objC.chaveA)