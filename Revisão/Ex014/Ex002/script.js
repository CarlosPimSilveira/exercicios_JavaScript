function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option') //crio o elemento option
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //chamando cada um de tab 1, 2, 3, 4... etc para saber qual foi selecionado
            tab.appendChild(item)  //elemento filho
            c++
        }
    }
}