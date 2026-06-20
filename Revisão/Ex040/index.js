const txtArray = document.querySelector('.txtArray') 
const btnExibir = document.querySelector('.btnExibir')
const resposta = document.createElement('p')
const revArray = []

if (revArray.length === 0) {
    btnExibir.disabled = true
}

function enviar()  {
    if (txtArray.value === '') return
    revArray.splice(revArray.length, 0, txtArray.value)
    btnExibir.disabled = false
    txtArray.value = ''
    txtArray.focus()
}

function exibir() {
    resposta.innerText = revArray.toString()
    document.querySelector('.divCent').appendChild(resposta)
}