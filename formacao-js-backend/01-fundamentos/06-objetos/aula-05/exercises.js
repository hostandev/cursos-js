const clientes = require('./clientes.json');

// console.log(clientes);

function toFind(list, key, value){
    return list.find((item) => item[key].includes(value));
}

console.log(toFind(clientes, "nome", "Amye"));

