const {faker} = require('@faker-js/faker');

const cliente = {
    name: faker.person.fullName(),
    age: faker.number.int({min: 18, max:80}),
    phone: faker.phone.number(),
    job: faker.person.jobType(),
    country: faker.location.country()
};

const spread_ = {...cliente};
console.log(typeof spread_);
console.log(spread_);

const entradas = Object.entries(cliente);

for(let a of entradas){
    console.log(`${a[0]}: ${a[1]}`);
}

/**
 * Com o operador de espalhando, é possível espalhar os campos
 * de um objeto.
 */