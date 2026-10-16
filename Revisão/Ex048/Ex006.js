// Ex 87 — Sistema de estacionamento
let veiculosEstacionados = []

function registrarEntrada(pla, mod) {
    let novoVeiculo = { placa: pla, modelo: mod };
    let achouVeiculo = false;
    let infoCarro = '';
    let indexParaRemover = -1; 

    veiculosEstacionados.forEach((veiculo, index) => {
        if (veiculo.placa.toLowerCase() === n1.toLowerCase()) {
            infoCarro = `Placa: ${veiculo.placa} | Modelo: ${veiculo.modelo}`;
            achouVeiculo = true;
            indexParaRemover = index;
        }
    });
    if (achouVeiculo) {
        return console.log('Veiculo ja esta estacionado!')
    } else {
        veiculosEstacionados.push(novoVeiculo);
    }
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

// Busca veiculo
function buscarVeiculo(n1) {
    let achouVeiculo = false
    let infoCarro = ''
    veiculosEstacionados.forEach((veiculo, index) => {
        index + 1
        if (veiculo.placa.toLocaleLowerCase() === n1.toLocaleLowerCase()) {
            infoCarro = `Placa: ${veiculo.placa} | Modelo: ${veiculo.modelo}`
            achouVeiculo = true
        }
    })
    if (achouVeiculo) {
        return `Veiculo encontrado! ${infoCarro}`
    } else {
        return 'Veiculo não encontrado!'
    }
}

// Registra saida 
function registrarSaida(n1) {
    let achouVeiculo = false;
    let infoCarro = '';
    let indexParaRemover = -1; 

    veiculosEstacionados.forEach((veiculo, index) => {
        if (veiculo.placa.toLowerCase() === n1.toLowerCase()) {
            infoCarro = `Placa: ${veiculo.placa} | Modelo: ${veiculo.modelo}`;
            achouVeiculo = true;
            indexParaRemover = index;
        }
    });

    if (achouVeiculo && indexParaRemover !== -1) {
        veiculosEstacionados.splice(indexParaRemover, 1); 
        console.log(`Saída registrada para: ${infoCarro}`);
    } else {
        console.log("Veículo não encontrado.");
    }
}

// Cadastra veiculos
registrarEntrada('ABC1234', 'Gol')
registrarEntrada('DEF5678', 'Civic')

// Lista veiculos
listarVeiculos()

// Busca veiculo
console.log(buscarVeiculo('abc1234'))

// Registra saida
registrarSaida('abc1234')





