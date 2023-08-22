const {troca} = require('../aula-02/ordenar');

function insertion(lista, indice){
  while(lista[indice] < lista[indice - 1]){
    troca(lista, indice, indice - 1);
    indice--;
  }
}

module.exports = {insertion};
