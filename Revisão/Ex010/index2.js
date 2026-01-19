
function calcular() {
    let txtv = window.document.getElementById('txtvel')
    let res = window.document.querySelector('div#res') //id é com # class é .
    let vel = Number(txtv.value)

    res.innerHTML = `<p>Sua velocidade atual é de <Strong>${vel}Km/h</  strong></p>`
    if (vel > 60) {
        res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade!</p>`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}