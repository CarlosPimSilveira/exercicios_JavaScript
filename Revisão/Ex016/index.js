function parimp(n) {
    if (n%2==0){
        return 'Par!'
    } else {
        return 'Impar!'
    }
}   
//let res = parimp(11)
console.log(parimp(223))

function soma(n1 = 0, n2=  0) { // parametros opcionais!
    return n1 + n2
}
console.log(soma(2, 7))

let v = function(x)  {
    return x*2
}
console.log(v(5))

// 5! = 5 x 4 x 3 x 2 x 1
function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial(5))

// Recursividade!
function fatorial1(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial1(n-1)
    }
} // Recursividade!
console.log(fatorial1(5))
/* 
    5! = 5 x 4 x 3 x 2 x 1
    5! = 5 x 4! 

    n! = n x (n-1)!
*/