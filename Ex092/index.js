// Herança com classes
class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado')
            return
        }
        this.ligado = true
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado')
            return
        }
        this.ligado = false
    }
}

// Com o extends ela passa a receber tudo o que tem em dispositivoeletronico
// Ela herda 
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome) // class pai qe tem o nome -> to chamando o constructor da outra class e usando o nome

        this.cor = cor
        this.modelo = modelo
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome)
        this.temWifi = temWifi
    }

    // Aqui ele vem e busca o ligar caso ele nao encontre ele vai ate o pai dele e busca la dentro dele o metodo. nesse caso ta sobreescrito.
    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado e foi alterado')
            return
        }
        this.ligado = true
    }

    // Esse metodo so fica disponivel para o tablet!
    falaOi(){
        console.log('Oi')
    }
}

const s1 = new Smartphone('Iphone', 'Preto', '14 pro')
const t1 = new Tablet('teste', 'sim')

console.log(s1)
console.log(t1)
t1.ligar()
t1.ligar()
t1.falaOi()