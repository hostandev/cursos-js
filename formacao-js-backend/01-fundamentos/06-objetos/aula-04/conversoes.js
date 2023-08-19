
const clienteObj = require('./cliente.json');

console.log(clienteObj);

const clienteStr = JSON.stringify(clienteObj);

console.log(clienteStr);

const clienteObj1 = JSON.parse(clienteStr);

console.log(clienteObj1);