// NV 2 - Condicionais
// 16 - Verifique se um número é positivo, negativo ou zero.
let Num16 = [10, -5, 20, -1, -6, -8, 8, 0]
for (let c = 0; c < Num16.length; c++) {
    if (Num16[c] > 0) {
        console.log((Num16[c] % 2 === 0) 
        ? `O numero ${Num16[c]} é positivo e par` 
        : `O numero ${Num16[c]} é positivo e ímpar`)

    } else if (Num16[c] < 0) {
        console.log((Num16[c] % 2 === 0) 
        ? `O numero ${Num16[c]} é negativo e par` 
        : `O numero ${Num16[c]} é negativo e ímpar`)
        
    } else {
        console.log(`O numero ${Num16[c]} é positivo e par`)
    }
}
