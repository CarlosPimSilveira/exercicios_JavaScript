const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros) {

    // Estamos pulando o numero 2 mas continuando adiante pulando para a proxima 
    if (numero === 2 || numero === 5) {
        continue
    }

    console.log(numero)

    // Vai quebrar no numero 7
    // aqui vai sair do loop parando de execultar isso seria bom em um loop longo.
    if (numero === 7) {
        console.log('7 encontrado, saindo...')
        break
    }
}