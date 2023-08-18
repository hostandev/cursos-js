const nros = [1,2,3,4,5,6,3,5,6,4,3,2,5,2,2,4,4,5,5,3,2,5,3,2];

console.log(nros);
console.log(`${nros.length} items`);

const nros_unicos = [...new Set(nros)];
console.log(nros_unicos);
console.log(`${nros_unicos.length} items`);
