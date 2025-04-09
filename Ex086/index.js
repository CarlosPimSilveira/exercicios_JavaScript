// Validando um CPF
// 705.484.450-52 | 070.987.720-03 - CPF de exemplo nao é um CPF
/*

7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2 
70  0  40 28 48 20 16 15 0

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11  10 9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10

11 - (237 % 11) = 5 (Primeiro digito)
11 - (284 % 11) = 5 (Primeiro digito)
*/
function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function() {
            return cpfEnviado.replace(/\D+/g, '') //remove tudo o que nao for numero por nada
        }
    })
}

ValidaCPF.prototype.valida = function() {
    if (typeof this.cpfLimpo === 'undefined') return false
    if (this.cpfLimpo.length !== 11) return false
    if (this.isSequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)

    const novoCpf = cpfParcial + digito1 + digito2

    return novoCpf === this.cpfLimpo
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial)

    let regressivo = cpfArray.length + 1
    const total = cpfArray.reduce((ac, val) => {    
        //console.log(regressivo, val, regressivo * val)
        ac += (regressivo * Number(val))
        regressivo--
        return ac
    }, 0)

    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito)
}

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length) //vai repetir o primeiro caractere da string
    return sequencia === this.cpfLimpo
}

// 705.484.450-52 | 070.987.720-03 - CPF de exemplo nao é um CPF
const cpf = new ValidaCPF('705.484.450-52')
if(cpf.valida()) {
    console.log('CPF válido!')
} else {
    console.log('CPF inválido!')
}
