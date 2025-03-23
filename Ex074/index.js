//Funções geradoras

function* geradora1() {
    //Código qualquer...
    yield 'valor 1'
    //Código qualquer...
    yield 'valor 2'
    //Código qualquer...
    yield 'valor 3'
    //cada vez que passar ele retorna um novo valor a cada passada
}

const g1 = geradora1()
console.log(g1.next()) // primeiro retorna o primeiro valor ja o done: false -> significa que ainda tem mais coisas a serem mostradas ou mais valores dentro!
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next())

for (let valor of g1) {
    console.log(valor)
}

function* gerador2() {
    let i = 0;
    //a cada vez ele cria um novo numero de forma eterna!
    while(true) {
        yield i
        i++
    }
}

const g2 = gerador2()
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)


function* geradora3() {
    yield 0
    yield 1
    yield 2
}

function* geradora4() {
    yield* geradora3()
    yield 3
    yield 4
    yield 5
}

const g4 = geradora4();
for (let v of g4) {
    console.log(v)
}

function* geradora5() {
    yield function() {
        console.log('Vim do y1')
    }

    // ...
    return function() {
        console.log('Quebrando o segundo vim do y2')
    }
    // ...

    yield function() {
        console.log('Vim do y2')
    }
}

const g5 = geradora5()
const func1 = g5.next().value
const func2 = g5.next().value

func1()
func2()