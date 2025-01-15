function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const Dia  = zeroAEsquerda(data.getDate());
    const Mes  = zeroAEsquerda(data.getMonth() + 1);
    const Ano  = zeroAEsquerda(data.getFullYear());
    const Hora = zeroAEsquerda(data.getHours());
    const Min  = zeroAEsquerda(data.getMinutes());
    const Seg  = zeroAEsquerda(data.getSeconds());

    return `${Dia}/${Mes}/${Ano} ${Hora}:${Min}:${Seg}`
}

const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil)
