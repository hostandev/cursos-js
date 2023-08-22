/**
 * Algoritmo que simula uma estante de livros.
 * 
 * A cada novo livro, com um valor diferente, a inserção
 * ocorrerá no final. Em seguida, o livro será inserido
 * de forma que fique ordenado por valor.
 */

const {faker}  = require('@faker-js/faker');

// Cria uma estante com um único livro
function criarEstante(quantidade){
  const lista = [];
  for(let i = 0; i < quantidade; i++){
    lista.push(faker.number.int({min: 1, max: 10}));
  }
  return lista;
}

// Cria um novo livro
function criarLivro(){
  return faker.number.int({min: 1, max: 10});
}

/**
 * Adiciona um novo livro na estante de acordo com 
 * seu valor.
 */
function inserirLivroNaEstante(estante, livro){
  // insere o livro no final da estante
  estante.push(livro);
  let posicaoAtual = estante.length - 1;

  // ordena o livro se necessário
  while(estante[posicaoAtual] < estante[posicaoAtual - 1]){
    troca(estante, posicaoAtual, posicaoAtual - 1);
    posicaoAtual--;
  }
}

// Função de troca, que auxilia na ordenação do livro.
function troca(lista, a, b){
  const temp = lista[a];
  lista[a] = lista[b];
  lista[b] = temp;
}

// Função principal.
function main(){
  const estante = criarEstante(1);
  console.log('Estante inicial: ', estante);
  
  for(let i = 0; i < 5; i++){
    let novoLivro = criarLivro();
    console.log('Novo livro: ', novoLivro);
  
    inserirLivroNaEstante(estante, novoLivro);
    console.log('Estante atual: ', estante);
  }
}

main();