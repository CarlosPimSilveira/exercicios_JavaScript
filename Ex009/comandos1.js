function verificar() {
    var pais = window.document.querySelector('input#txtpais').value
    var res = window.document.querySelector('div#res')

    res.innerHTML = `<p>Vivendo em ${pais}</p>`
    if (pais == 'Brasil') {
        res.innerHTML += `<p>Você é Brasileiro!</p>`
    } else {
        res.innerHTML += `<p>Você é Estrangeiro!</p>`
    }
}