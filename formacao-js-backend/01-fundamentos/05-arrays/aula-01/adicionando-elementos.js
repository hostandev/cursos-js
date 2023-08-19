const notas = [1, 2, 3];
const media = (notas[0] + notas[1] + notas[2]) / notas.length;
console.log(media);

notas.push(4); // adicionando elementos
const media2 = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media2);

notas.push(3);
console.log(notas);
notas.pop(); // removendo elementos
console.log(notas);