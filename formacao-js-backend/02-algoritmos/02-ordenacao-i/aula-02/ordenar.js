const menorValor = require('../aula-01/menor-valor');

function troca(array, a, b){
	const temp = array[a];
	array[a] = array[b];
	array[b] = temp;
}

function ordenar(lista){
	for (let indiceAtual = 0; indiceAtual < lista.length - 1; indiceAtual++){
		let _menorValor = menorValor(lista, indiceAtual);
		if (indiceAtual !== _menorValor){
			troca(lista, indiceAtual, _menorValor);
		}
	}

	return lista;
}

module.exports = ordenar;