// conversão de tipos

// implícita

let numero = 3;
let numeroComoString = "3";

console.log("3 === '3': " +  (numero === numeroComoString)); // compara o valor e o tipo
console.log("3 == '3': " +  (numero == numeroComoString)); // compara somente o valor
console.log('"3" + 3: ' + (numero + numeroComoString));

let numeroComoNumero = Number(numeroComoString)
console.log("Tipo de numeroComoString: " + typeof(numeroComoString))
console.log("Tipo de numeroComoNumero: " + typeof(numeroComoNumero))

console.log('3 + 3: ' + (numero + numeroComoNumero));

// convertendo de numero para String
let stringComoNumero = String(numeroComoNumero);
console.log("Numero convertido em String: " + typeof(stringComoNumero));
console.log("Numero convertido em String: " + stringComoNumero);
console.log("Numero convertido em String com toString(): " + stringComoNumero.toString());

// conversão entre boolean e string
console.log(Boolean("true") === true)
console.log(typeof(String(true)))

// testando escopo
var respostaDeTudo = 42
let idade = 29
const pi = 3.14

console.log(respostaDeTudo, idade, pi)

{
    var respostaDeTudo = 3.14 // var permite renomear em qualquer ponto do código
    let idade = 42 // o let respeita o escopo de utilização da variável
    const pi = 29 // o const define uma variável que não pode ser reatribuída
    console.log(respostaDeTudo, idade, pi)
}

console.log(respostaDeTudo, idade, pi)
