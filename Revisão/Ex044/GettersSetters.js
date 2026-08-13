const _velocidade = Symbol('Velocidade')

class Carro {
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 0
    }

    acelerar() {
        if (this[_velocidade] >= 100) return
        this[_velocidade]++
    }

    freiar() {
        if (this[_velocidade] <= 0) return
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca')
for (let i = 0; i <= 200; i++) {
    c1.acelerar()
} console.log(c1)

for (let i = 0; i <= 200; i++) {
    c1.freiar()
} console.log(c1)
