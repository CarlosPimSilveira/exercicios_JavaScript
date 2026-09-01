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
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length)
    }

    valida() {
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return falso
        if(this.cpfLimpo.length !== 11) return falso

        return 'Cheguei aqui'
    }
}

const validacpf = new ValidaCPF('070.987.720-03')
console.log(validacpf.valida())
