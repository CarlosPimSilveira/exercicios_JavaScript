// Classes (validando CPF)
// 705.484.450-52 | 070.987.720-03 - CPF de exemplo nao é um CPF

class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        }) 
    }

    eSequencia() {
        // ele vai repetir o primeiro caracter do cpflimpo pelo tamanho da string!
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    }

    geraNovoCPF() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        // aqui trocamos o this pelo ValidaCPF
        // this é minha instancia e metodos static são metodos da classe entao para converter usamos o nome da class
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos)
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1)
        /*
        No seu código, mesmo sem declarar novoCPF antes, ao usar this.novoCPF = ... dentro da classe, o JavaScript automaticamente cria essa propriedade no objeto. Isso é normal e permitido, pois em JavaScript, propriedades de objetos podem ser criadas dinamicamente, sem precisar usar let, var ou const.
        Já variáveis locais (dentro de métodos) precisam ser declaradas com const, let ou var. Mas propriedades como this.novoCPF não precisam dessa declaração prévia.
        Se você quiser mais controle sobre a propriedade (como tornar ela imutável ou invisível), aí sim poderia usar Object.defineProperty.    
        */
        this.novoCPF = cpfSemDigitos + digito1 + digito2
    }

    // nessa "função" não usamos o this pois nao precisamos de nada da instancia estamos recebendo pelo parametro então ao não usar this em um metodo isso significa que ele pode se tornar um static!
    static geraDigito(cpfSemDigitos) {
        let total = 0
        let reverso = cpfSemDigitos.length + 1
        for(let StringNumerica of cpfSemDigitos) {
            total += reverso * Number(StringNumerica)
            reverso --
        }

        const digito = 11 - (total % 11)
        return digito <= 9 ? String(digito) : '0'
    }

    valida() {
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.eSequencia()) return false
        this.geraNovoCPF()

        return this.novoCPF === this.cpfLimpo
    }
}

let validacpf = new ValidaCPF('070.987.720-03');
//validacpf = new ValidaCPF('999.999.999-99')

if (validacpf.valida()) {
    console.log('CPF válido')
} else {
    console.log('CPF inválido')
}
