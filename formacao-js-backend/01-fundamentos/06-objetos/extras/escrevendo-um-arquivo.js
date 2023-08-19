const fs = require('fs');
const {faker} = require('@faker-js/faker');

const persons = [];

for(let i = 0; i < 100; i++){
    const name = faker.person.fullName();

    const person = {
        name: name,
        age: faker.number.int({min: 18, max: 80}),
        job: faker.person.jobType(),
        salary: faker.number.float({min: 1000.0, max: 10000.0, precision: 0.01}),
        email: faker.internet.email({firstName: name}),
        phone: faker.phone.number()
    };
    persons.push(person)
}

fs.writeFileSync('new_persons.json', JSON.stringify(persons, null, 2));
