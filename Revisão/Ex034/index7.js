// Funções de CallBack

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

function f1() {
    setTimeout(function() {
        console.log('f1')
    }, 500)
}

function f2() {
    setTimeout(function() {
        console.log('f2')
    }, 1000)
}

function f3() {
    setTimeout(function() {
        console.log('f3')
    }, 800)
}

f1()
f2()
f3()
console.log('Olá mundo!')