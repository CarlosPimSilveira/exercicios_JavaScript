// Funções recursivas 
// "Ela mesmo se chama"
function recursiva (max){
    if (max >= 10) return //para aqui quando for maior que 10
    max++ // max que começa no 0 sobe 1
    console.log(max) // exibe na tela
    recursiva(max) //chama ela mesma passando o mesmo parametro
}

recursiva(0)