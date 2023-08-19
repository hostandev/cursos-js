const nro = 5;
const txt = "5";

console.log(nro == txt); // compara valores
console.log(nro === txt); // compara valores e tipos

console.log(typeof(nro), typeof(txt)); // exibe os tipos de dados.

/**
 * Desta forma, caso quiser comparar os valores, 
 * será necessário fazer a conversão explícita.
 */

console.log(nro === Number(txt)) // conversão explícita
console.log(String(nro) === txt) // conversão explícita
