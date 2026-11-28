// Sistema de Check-in de voo assicrono
const passageiros = [
    {
        cpf: '123.456.789-10',
        nome: 'João Silva',
        voo: 'LA1234',
        bagagemKg: 18
    },
    {
        cpf: '234.567.890-21',
        nome: 'Maria Oliveira',
        voo: 'LA1234',
        bagagemKg: 25
    },
    {
        cpf: '345.678.901-32',
        nome: 'Pedro Santos',
        voo: 'LA5678',
        bagagemKg: 12
    },
    {
        cpf: '456.789.012-43',
        nome: 'Ana Costa',
        voo: 'LA5678',
        bagagemKg: 23
    }
];

const voos = [
    {
        codigo: 'LA1234',
        destino: 'Rio de Janeiro',
        status: 'Confirmado'
    },
    {
        codigo: 'LA5678',
        destino: 'Salvador',
        status: 'Cancelado'
    },
    {
        codigo: 'AD9012',
        destino: 'Recife',
        status: 'Confirmado'
    },
    {
        codigo: 'G31234',
        destino: 'Brasilia',
        status: 'Confirmado'
    }
];

function validarCPF(cpf) {
    if (typeof cpf !== 'string') {
        return false;
    }

    const cpfLimpo = cpf.replace(/\D/g, '');

    if (cpfLimpo.length !== 11) {
        return false;
    }

    return true;
}

async function buscarPassageiros(cpf) { 
    if (!validarCPF(cpf)) {
        return console.log('CPF invalido!')
    }

    
}



