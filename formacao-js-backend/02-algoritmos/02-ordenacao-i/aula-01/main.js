/**
 * Testando o algoritmo selection sort. 
 * Encontra o menor valor de um array, e partir daí,
 * consegue ordenar um array, executando o mesmo algoritmo sobre 
 * cada item.
 */


const gerarProdutos = require('./gerar-produtos');
const menorValor = require('./menor-valor');
const ordenar = require('./ordenar')

function main(){
	const produtos = gerarProdutos(8);

	console.log('Produtos desordenados: ', produtos);
	console.log('Produtos ordenados: ', ordenar(produtos));
  console.log('Menor valor: ', produtos[menorValor(produtos)]);
}

main();