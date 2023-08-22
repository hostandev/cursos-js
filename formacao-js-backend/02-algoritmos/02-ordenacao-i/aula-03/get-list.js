const {faker} = require('@faker-js/faker');

function getList(quantidade){
  const lista = [];
  for(let i = 0; i < quantidade; i++){
    lista.push(faker.number.int({min: 1, max: 10}));
  }
  return lista;

}

module.exports = {getList};