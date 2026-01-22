var n = 1
while (n <= 10) {
    console.log(n)
    n++
}

console.log('Proximo!')

n = 10
while (n >= 1) {
    console.log(n)
    n--
}

console.log('Proximo!')

var a = 9
var c = 1
while(c <= 10) {
    console.log(c*a)
    c++
}

console.log('Proximo!')

for(let n1 = 1; n1 <= 20; n++) {
    let resto = n1 % 2
    if(resto)
        console.log(n1)
}