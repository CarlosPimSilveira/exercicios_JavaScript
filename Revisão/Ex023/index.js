function Enviar() {
    let txtNome = window.document.getElementById('NomeTXT').value
    let txtSobrenome = window.document.getElementById('SobrenomeTXT').value
    let txtPeso = window.document.getElementById('PesoTXT').value
    let txtAltura = window.document.getElementById('AlturaTXT').value

    var p = document.createElement('p')
    p.setAttribute("id", "p")
    document.body.appendChild(p)
    p.innerText = txtNome + ' ' + txtSobrenome + ' ' + txtPeso + ' ' + txtAltura;
}