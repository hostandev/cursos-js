const {insertion} = require('./insertion');

function _sort(lista){
  for(let i = 1; i < lista.length; i++){
    insertion(lista, i);
  }
}

module.exports = {_sort};