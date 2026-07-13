// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
}

// new Object -> Object.prototype
const objB = {
    chaveA: 'B'
    // __proto__: Object.prototype
}

Object.setPrototypeOf(objB, objA)
console.log(objB.chaveA)