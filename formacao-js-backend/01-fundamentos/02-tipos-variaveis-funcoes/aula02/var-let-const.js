// var

var altura = 5;
var largura = 5;

area = largura * altura; // js aceita utilizar variáveis sem declarar
var area; // é possível declarar a variável com var depois de utilizá-la.
console.log("Área do quadrado: " + area);

var prefixo = "Java"; // mas o ideal é declararmos tudo antes de utilizar. 
var sufixo = "Script";

console.log("Concetenação: " + (prefixo + sufixo));

// let exige a declaração prévia.

let altura1 = 2;
// base = 3; // Cannot access 'base' before initialization
// let base;
let base = 3;
let areaTriangulo = base * altura1 * 2;

console.log("Área do triângulo: " + areaTriangulo);

// em resumo, atualmente, não utilizamos mais o var

// const, utilizada para constantes.

const PI = 3.1415;
let raio = 3

let areaDoCirculo = (PI * raio) ** 2;
console.log("Área do circulo: " + areaDoCirculo)