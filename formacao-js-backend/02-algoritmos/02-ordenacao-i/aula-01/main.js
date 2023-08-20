// menor valor
const menorValor = require('./menor-valor');
const gerarProdutos = require('./gerar-produtos');

function main(){
  const produtos = gerarProdutos(6);

  console.log('Produtos: ', produtos);
  console.log('Menor valor: ', produtos[menorValor(produtos)]);
}

main();