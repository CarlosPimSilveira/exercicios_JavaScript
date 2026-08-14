class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    //Metodos
    ligar() {
        if(this.ligado) {
            console.log(this.nome +' Já ligado')
            return
        }

        this.ligado = true
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome +' Já desligado')
            return
        }

        this.ligado = false
    }
}

const d1 = new DispositivoEletronico('Smartphone')
console.log(d1.ligar)

