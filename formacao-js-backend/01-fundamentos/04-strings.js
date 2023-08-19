/**
 * Strings são sequências de caracteres alfanuméricos.
 */

// declaração
const msg = "Aprendendo JS";


// conversões
const nro = 42;
const str1 = new String(nro);
const str2 = nro.toString();

console.log(str1, str2);


// concatenação
let nome = 'Paulo';
let sobrenome = ' Roberto';
let nomeCompleto = "";
nomeCompleto += nome;
nomeCompleto += sobrenome;

console.log(nomeCompleto);


// Interpolação
let lang = 'JavaScript';
let msg1 = `Estou aprendendo ${lang}.`;

console.log(msg1);


// métodos de String.
console.log(lang.length);
console.log(lang.charAt(3));
console.log(lang.indexOf('S'));
console.log(lang.toUpperCase());
console.log(lang.substring(0, 2));
console.log(lang.slice(1, 2));
console.log(lang.replace('a', 'x'));
console.log(lang.concat(' e NodeJS.'));
console.log(lang.split('S'));
const js = " JavaScript     ";
console.log(js.length);
console.log(js.trim().length);
