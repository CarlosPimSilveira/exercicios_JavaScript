try {
    // É executada quando não há erros
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou erro')
    console.log('Fechei o arquivo')

    try {
        console.log(b)
    } catch (e) {
        console.log('Deu erro')
    } finally {
        console.log('Também sou finally')
    }

} catch (e) {
    // É executada quando há erros
    console.log('Tratando o erro')
} finally {
    // Sempre
    // aqui caso der erro como sempre é executado podemos fechar o programa com erro aqui
    console.log('Eu sempre sou executado')
}