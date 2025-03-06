try {
    // É executado quando não há erros!
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou erro') //Deu erro aqui a linha de fechei o arquivo nao sera executado!
    console.log('Fechei o arquivo')
} catch (e) {
    // é executado quando há erros
    console.log('Tratando o erro')
} finally {
    // Sempre é executado!
    console.log('Fechei o arquivo') // Aqui sempre vai passar entao aqui fechamos o arquivo dando erro ou não!
}