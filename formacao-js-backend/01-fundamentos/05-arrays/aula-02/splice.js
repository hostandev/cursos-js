const alunos = [
    'João', 'Juliana', 'Ana', 'Caio', 
    'Lara', 'Marjorie', 'Guilherme'
];

const alunosRemovidos = alunos.splice(3, 3);

console.log(alunos);
console.log(alunosRemovidos);
alunos.splice(1, 2, 'Renata');
console.log(alunos);

