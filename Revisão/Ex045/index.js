// Usando classes validando CPF
/* 
705.484.450-52 070.987.720-03
*/
class ValidaCPF{
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    éSequência() {
        // Esta verificando se é uma sequencia!
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        const digito1 = this.geraDigito(cpfSemDigitos)
        const digito2 = this.geraDigito(cpfSemDigitos + digito1)
    }

    geraDigito(cpfSemDigitos) {
        let total = 0
        let reverso = cpfSemDigitos.length + 1

        for(let stringNumerica of cpfSemDigitos) {
            console.log(stringNumerica, typeof stringNumerica)
        }
    }

    valida() {
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return falso
        if(this.cpfLimpo.length !== 11) return falso
        if(this.éSequência()) return false
        if(!this.geraNovoCpf()) return false

        return 'Cheguei aqui'
    }
}

const validacpf = new ValidaCPF('070.987.720-03')
console.log(validacpf.valida())
