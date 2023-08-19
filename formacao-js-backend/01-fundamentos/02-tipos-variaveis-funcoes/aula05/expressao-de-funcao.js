// expressão de função

// atenção: se comportará como uma variável, hoistinga com foco em JavaScript.
// ou seja, não é possível chamar total antes de declarar.
const total = function(a, b){ return 2 + 3;} 
console.log(total(1, 2));

