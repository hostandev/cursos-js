const alunos = ['jose', 'maria', 'joao', 'pedro'];
const notas = [1, 5, 7, 9];

const alunosAprovados = alunos.filter((_, i) => notas[i] >= 7);

console.log(alunosAprovados);