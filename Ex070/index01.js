// inverter string

function inverter(palavra) {
    let invertida = [];
    for (let i = palavra.length - 1; i >= 0; i--) {
        invertida.push(palavra[i]);
    }
    console.log(invertida.join('')); 
}

inverter('teste'); 
