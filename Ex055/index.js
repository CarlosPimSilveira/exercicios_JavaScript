const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i]

    if (numero === 2) { // || numero === 5) 
        console.log('pulei o numero 2')
        continue
        //ao encontrar a palavra continue ele retorna para o topo do for e meio que pula o numero 2
    }

    if (numero === 6) {
        break
        //finaliza o laço nao exibindo o numero 6
    }

    console.log(numero);
}