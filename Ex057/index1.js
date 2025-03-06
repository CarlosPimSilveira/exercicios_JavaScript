function soma(x, y) {
    if (typeof x !== 'number' || typeof y !==  'number') {
        throw new Error('x e y precisam ser numeros.')
        //Tratando o erro! (try, catch, throw)
        //new Error - lança o errodo js! (sai como erro por conta do Error porem poderia ser ReferenceError! e podemos criar class)
    }
    
    return x + y
}

try {
    console.log(soma(1, 2))
    console.log(soma('1', 2))
} catch(error) {
    console.log(error)
}