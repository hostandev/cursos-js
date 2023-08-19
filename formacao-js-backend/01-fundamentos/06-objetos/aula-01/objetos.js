// lista
const obj1 = ['Maria', 35, 'Belo Horizonte'];

console.log(`Nome: ${obj1[0]}, idade: ${obj1[1]}, cidade: ${obj1[2]}.`);

// objetos
const obj2 = {
    nome: 'Maria',
    idade: 35,
    cidade: 'Belo Horizonte',
};

// tipos de acesso
// com ponto .
console.log(
    `Nome: ${obj2.nome}, idade: ${obj2.idade}, cidade: ${obj2.cidade}.`);


// com colchetes
console.log(
    `Nome: ${obj2["nome"]}, ` +
    `idade: ${obj2["idade"]}, ` + 
    `cidade: ${obj2["cidade"]}.`);

// removendo uma propriedade
delete obj2.cidade;

console.log(
    `Nome: ${obj2.nome}, idade: ${obj2.idade}, cidade: ${obj2.cidade}.`);
