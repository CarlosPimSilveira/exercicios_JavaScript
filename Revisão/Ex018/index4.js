function contarPar() {
    let soma = 0
    for(let c = 1; c <= 100; c++) {
        if(c%2 == 0) {
            soma += c
        }
    }
    return soma
} console.log(contarPar())

function inverterArrayManuamente() {
    let valores = [10, 20, 30, 40, 50]
    let v = []
    for(let c = 0; c < valores.length; c++) {
        v.push(valores[valores.length - 1 - c])
    }
    return v
} console.log(inverterArrayManuamente())