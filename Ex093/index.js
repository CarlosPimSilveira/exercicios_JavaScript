// Métodos de instância e estáticos
// Métodos estáticos que podemos acessar na class sem instanciar a class (sem usar a palavra new) que tambem não estao disponivel dentro da instancia

function teste() {
    console.log('Este é meu teste.')
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
        //Tudo referente a instancia
        teste()
    }

    // Método de instância
    aumentarVolume() {
        this.volume += 2
    }

    // Método de instância
    diminuirVolume(){
        this.volume -= 2
    }

    // Método estático
    static trocaPilha() {
        console.log('Ok, vou trocar.')
    }

    static soma(x, y) {
        return x + y //aqui o this seria referente a class dele ou seja controleRemoto! e nao global
    }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
console.log(controle1)
controle1.diminuirVolume()
console.log(controle1)
// eu so consigo acessar ele (trocaPilha) usando diretamente minha class ou seja nao preciso usar o controle1 para acessar eu uso a propria class
console.log(ControleRemoto.soma(2, 4))