function Enviar() {
    const campos = ['NomeTXT', 'SobrenomeTXT', 'PesoTXT', 'AlturaTXT']

    let valores = campos.map(id => document.getElementById(id).value)

    let p = document.createElement('p')
    p.innerText = valores.join(' ')
    document.body.appendChild(p)

    // limpa todos
    campos.forEach(id => document.getElementById(id).value = '')
}