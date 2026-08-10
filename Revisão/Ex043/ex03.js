// app.js

const users = [
    { id: 1, name: "Carlos", active: true },
    { id: 2, name: "Maria", active: true },
    { id: 3, name: "João", active: false },
    { id: 4, name: "Ana", active: true }
];

function getUser(id) {
    return users.find(user => user.id === id);
}

function validateUser(user) {
    if (!user) {
        throw new Error("Usuário não encontrado.");
    }

    if (!user.active) {
        throw new Error("Usuário inativo.");
    }

    return true;
}

function formatUser(user) {
    return {
        id: user.id,
        name: user.name.toUpperCase(),
        status: "ONLINE"
    };
}

function loadProfile(id) {
    const user = getUser(id);

    validateUser(user);

    return formatUser(user);
}

try {
    const profile = loadProfile(4);

    console.log(profile);
} catch (err) {
    console.error(err.message);
}