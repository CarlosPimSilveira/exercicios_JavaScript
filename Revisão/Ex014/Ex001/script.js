function contar() {
    let ini = window.document.getElementsByName('txtini')[0]
    let fim = window.document.getElementById('txtfim')
    let passo = window.document.querySelector('input#txtpasso')
    let res = window.document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        //window.alert('[Erro] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            // Contagem crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
