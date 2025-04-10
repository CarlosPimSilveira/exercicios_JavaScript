// Getters e Setters
const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 0
    }

    //usando o set estamos verificando se o que vem no velocidade é um numero e se estra dentro dos valores aceitos caso não ele nao permite caso é um valor aceito ele retorna para dentro do nosso symbol 
    set velocidade(valor) {
        if(typeof valor !== 'number') return
        if(valor >= 100 || valor <= 0) return
        this[_velocidade] = valor
    }

    get velocidade() {
        return this[_velocidade]
    }

    acelerar() {
        if(this[_velocidade] >= 100) return
        this[_velocidade]++
    }

    freiar() {
        if(this[_velocidade] <= 0) return
        this[_velocidade]--
    }
}

const c1 = new Carro('Fusca')
for(let i = 0; i <= 200;  i++) {
    c1.acelerar()
}

// mesmo colocando na mao a velocidade o sistema vai usar o _velocidade que utilizamos na chave [_velocidade] deixando ela privada 
// agora mesmo alterando o velocidade ele nao usar o [_velocidade]
c1.velocidade = 2000
console.log(c1)