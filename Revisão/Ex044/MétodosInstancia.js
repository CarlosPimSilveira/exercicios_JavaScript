//  Métodos de instância e estáticos

function teste() {
    console.log('Este é meu teste.')
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
        teste();
    }

    // Método de instância 
    aumentarVolume() {
        this.volume += 2
    }

    // Método de instância 
    diminuirVolume() {
        this.volume -= 2
    }

    // Método estático
    static trocaPilha() {
        console.log('Ok, vou trocar.')
    }

    static soma(x, y) {
        return x + y
    }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.diminuirVolume()
console.log(controle1)

ControleRemoto.trocaPilha()
console.log(ControleRemoto.soma(2, 5))