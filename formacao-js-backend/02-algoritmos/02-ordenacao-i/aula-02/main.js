/**
 * Testando o algoritmo selection sort. 
 * Encontra o menor valor de um array, e partir daí,
 * consegue ordenar um array, executando o mesmo algoritmo sobre 
 * cada item.
 */


const gerarProdutos = require('../aula-01/gerar-produtos');
const menorValor = require('../aula-01/menor-valor');
const ordenar = require('./ordenar')

function main(){
	const produtos = gerarProdutos(8);

	console.log('Produtos desordenados: ', produtos);
	console.log('Produtos ordenados: ', ordenar(produtos));
  console.log('Menor valor: ', produtos[menorValor(produtos)]);
}

main();