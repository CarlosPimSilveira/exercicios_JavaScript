//Funções recursivas!
//Ela mesmo se chama de volta 
//ps: acho que o maximo é 10350

function recursiva(max) {
    if (max >= 10351) return;
    max++
    console.log(max)
    recursiva(max)
}

recursiva(0)