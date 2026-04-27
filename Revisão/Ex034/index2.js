function funcao(a, b = 2, c = 4) {
    // b = b || 0;
    console.log(a + b + c)
}
funcao(2, , 20)