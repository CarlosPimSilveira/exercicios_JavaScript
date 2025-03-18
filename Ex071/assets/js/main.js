function criaCalculadora() {
    return {
        display: document.querySelector('.display'), //dentro de um atributo

        inicia: function() { //metodo que inicia
            this.cliqueBotoes() //Para iniciar uma chave do meu objeto
            this.pressionaEnter()
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta()
                }
            })
        },

        clearDisplay() {
            this.display.value = ''
        },

        apagaUm()  {
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta)

                if (!conta) {
                    alert('Conta inválida')
                    return
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida')
                return
            }
        },

        cliqueBotoes() {
            // aqui o this passa a ser document!
            document.addEventListener('click', function(e) {
                const el = e.target

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText  )
                }

                if (el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm()
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }
            }.bind(this)) //retorna a ser o this calculadora
        },

        btnParaDisplay(valor) {
            this.display.value += valor
        }
    }; // factory function retorna objeto
}

const calculadora =  criaCalculadora()
calculadora.inicia()
