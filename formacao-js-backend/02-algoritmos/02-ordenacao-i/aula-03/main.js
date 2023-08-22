const {getList} = require('./get-list');
const {_sort} = require('./_sort');

function main(){
  const lista = getList(6);
  console.log('lista original', lista);
  _sort(lista);
  console.log('lista ordenada', lista);
}

main();