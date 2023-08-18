const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const materias = ['Matemática', 'Português', 'Biologia', 'Física'];
const notas = [8, 9, 10, 5];
const escola = [alunos, materias, notas];

const aluno = alunos[3];
console.log(aluno);

if (alunos.includes(aluno)) {
    console.log(`Aluno ${aluno} encontrado`);
    const index = alunos.indexOf(aluno);
    console.log(
        `Aluno: ${escola[0][index]}, Matéria: ${escola[1][2]}, ` +
        `Nota:${escola[2][2]}.`
    );
}