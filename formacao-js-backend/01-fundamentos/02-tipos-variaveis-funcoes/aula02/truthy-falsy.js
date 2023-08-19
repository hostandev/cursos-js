// booleanos
const usuarioLogado = true;
const alunoMatriculado = false;

console.log("Usuário logado: " + usuarioLogado);
console.log("Aluno matriculado: " + alunoMatriculado);


// outros valores considerados booleanos
console.log(true == 1); // 1 true
console.log(false == 0); // 0 false
console.log(false == ""); // "" false

let varSemDeinicao;
let varNula = null;

// console.log(varSemDefinicao);
console.log(varNula);

if (varNula) {
    console.log("true");
} else {
    console.log("false");
}

// isso gera um erro.
// if (varSemDefinicao) {
//     console.log("true");
// } else {
//     console.log("false");
// }

console.log("Tipos: " + typeof(null));
console.log("Tipos: " + typeof(varSemDeinicao));