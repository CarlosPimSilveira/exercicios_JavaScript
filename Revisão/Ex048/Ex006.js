// Ex 87 — Sistema de estacionamento
let veiculosEstacionados = []

function registrarEntrada(pla, mod) {
    let novoVeiculo = { placa: pla, modelo: mod };
    veiculosEstacionados.push(novoVeiculo);
}

// Cadastra veiculos
registrarEntrada('ABC1234', 'Gol')
registrarEntrada('DEF5678', 'Civic')

console.log(veiculosEstacionados)






