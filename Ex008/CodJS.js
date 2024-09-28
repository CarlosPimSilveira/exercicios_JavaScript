let operacao = null;

function setOperacao(op) {
    operacao = op; 
    document.getElementById('res').innerHTML = `Operação selecionada: <strong>${operacao}</strong>`;
}

function calcular() {
    var tn1 = document.getElementById('txtn1');
    var tn2 = document.getElementById('txtn2');
    var res = document.getElementById('res');

    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);

    if (!operacao) {
        res.innerHTML = "Selecione uma operação antes de calcular.";
        return;
    }

    let resultado;

    switch (operacao) {
        case '+':
            resultado = n1 + n2;
            break;
        case '-':
            resultado = n1 - n2;
            break;
        case '*':
            resultado = n1 * n2;
            break;
        case '/':
            if (n2 === 0) {
                res.innerHTML = "Não é possível dividir por zero.";
                return;
            }
            resultado = n1 / n2;
            break;
        default:
            res.innerHTML = "Operação inválida.";
            return;
    }
    
    res.innerHTML = `O resultado de ${n1} ${operacao} ${n2} é igual a <strong>${resultado}</strong>`;
}
