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

for(let n1 = 1; n1 <= 20; n1++) {
    if(n1 % 2 === 0) {
        console.log(`Par: ${n1}`)
    } else {
        console.log(`Ímpar: ${n1}`)
    }
}

console.log('Proximo!')

let res = 0
for (let cem = 1; cem <= 100; cem++) {
    res += cem
    console.log(res)
}

console.log('Proximo!')

let dig = 2
for (let b = 1; b <= 10; b++) {
    console.log(dig * b)
}

console.log('Proximo!')

let nome = 'carlos'
for(p = 1; p <= nome.length; p++) {
    p = nome.length - 1
    console.log(p)
}
