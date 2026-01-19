

function verificar() {
    let pais = window.document.getElementById('txtpais').value
    let res = window.document.querySelector('div#res')
    if (pais == 'Brasil' || pais == 'brasil') {
        res.innerHTML = `<p>Você é <strong>Brasileiro!</strong></p>`
    } else {
        res.innerHTML = `<p>Você é <strong>Estrangeiro!</strong></p>`
    }
}