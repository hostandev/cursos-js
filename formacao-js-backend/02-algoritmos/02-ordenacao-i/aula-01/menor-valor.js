function menorValor(lista, indiceDeMenorValor = 0) {

	for (let indiceAtual = indiceDeMenorValor; indiceAtual < lista.length; indiceAtual++) {
		if (lista[indiceDeMenorValor].price > lista[indiceAtual].price){
			indiceDeMenorValor = indiceAtual;
		}
	}

	return indiceDeMenorValor;
}

module.exports = menorValor;