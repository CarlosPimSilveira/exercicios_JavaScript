const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros) {

    // Estamos pulando o numero 2 mas continuando adiante pulando para a proxima 
    if (numero === 2) {
        continue
    }

    console.log(numero)
}