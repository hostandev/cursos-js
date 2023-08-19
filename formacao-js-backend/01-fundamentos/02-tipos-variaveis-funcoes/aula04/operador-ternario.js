const idadeMinima = 18;
const idadeCliente = 16;

console.log((idadeCliente >= idadeMinima) ? "liberado" : "negado");

/**
 * apesar de prático, dependendo do tamanho
 * pode se tornar complexo.
 */

const idade = 22;
const desconto1 = 1;
const desconto2 = 2;
const desconto3 = 4;
const desconto4 = 7;


// com if convencional
if (idade < 15) {
    console.log(desconto1);
} else if (idade < 20) {
    console.log(desconto2);
} else if (idade < 30) {
    console.log(desconto3);
} else {
    console.log(desconto4);
}

// utilizando o ternário
console.log((idade < 15) ? desconto1 : (idade < 20) ? desconto2 : (idade < 30) ? desconto3 : desconto4);