function Enviar() {
    let txtNome = window.document.getElementById('NomeTXT').value

    var p = document.createElement('p')
    p.setAttribute("id", "p")
    document.body.appendChild(p)
    p.innerText = txtNome;
}