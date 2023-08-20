const { faker } = require('@faker-js/faker');


class Product {
	constructor(name, price) {
		this._name = name;
		this._price = price;
	}

	set price(value) {
		console.log('executando o setter de price.');
		if (price <= 0.0) {
			console.error(
				'Err: Denied operation. Price must be greater than 0');
		} else {
			this._price = value;
		}
	}

	get name() {
		return this._name;
	}

	get price() {
		return this._price;
	}

	toString() {
		return `Produto: ${this.name}, Preço: ${this.price}`;
	}
}

function gerarProdutos(quantity) {
	const products = [];

	for (let i = 0; i < quantity; i++) {
		products.push(new Product(
			faker.commerce.productName(),
			faker.number.float({ min: 10, max: 1000, precision: 0.01 })
		));

	}

	return products;
}

module.exports = gerarProdutos;