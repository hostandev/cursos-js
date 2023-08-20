const menorValor = require('./menor-valor');

function troca(array, a, b){
	const temp = array[a];
	array[a] = array[b];
	array[b] = temp;
}

function ordenar(lista){
	for (let i = 0; i < lista.length - 1; i++){
		troca(lista, i, menorValor(lista, i));
	}

	return lista;
}

module.exports = ordenar;