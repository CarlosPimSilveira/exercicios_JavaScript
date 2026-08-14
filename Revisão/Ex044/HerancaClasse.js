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

// Herda do dispositivo eletronico e tem tudo dele
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); // Passando para o dispositivoeletronico chamando o construtor da class pai
        this.cor = cor
        this.modelo = modelo
    }
}

const s1 = new Smartphone('Iphone', 'Preto', 'Modelo 13 pro max')
s1.ligar()
console.log(s1)
