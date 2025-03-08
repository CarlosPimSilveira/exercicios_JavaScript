function soma(n1, n2) {
    if (!isNaN(n1) && !isNaN(n2)) {
        return console.log(Number(n1) + Number(n2));
    }
    return console.log('Não é número');
}

soma(5, '10');
soma(5, 'teste');
soma('', 10);
