// Ex 87 — Sistema de estacionamento
let veiculosEstacionados = []

function registrarEntrada(pla, mod) {
    let novoVeiculo = { placa: pla, modelo: mod };
    veiculosEstacionados.push(novoVeiculo);
}

// Lista veiculos
function listarVeiculos() {
    if (veiculosEstacionados.length === 0) {
        console.log("O estacionamento está vazio.");
        return;
    }

    console.log("--- VEÍCULOS ESTACIONADOS ---");
    veiculosEstacionados.forEach((veiculo, index) => {
        console.log(`${index + 1}. Modelo: ${veiculo.modelo} | Placa: ${veiculo.placa}`);
    });
}

// Cadastra veiculos
registrarEntrada('ABC1234', 'Gol')
registrarEntrada('DEF5678', 'Civic')

// Lista veiculos
listarVeiculos()








