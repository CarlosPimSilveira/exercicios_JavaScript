function saudacao(nome, callback) {
    console.log("Olá, " + nome);
    callback(); // Executa a função passada como argumento
}

function despedida() {
    console.log("Até logo!");
}

saudacao("Carlos", despedida);
