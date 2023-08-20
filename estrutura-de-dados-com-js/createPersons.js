const {faker} = require('@faker-js/faker');

class Person {
    constructor(name, age) {
        this._name = name
        this._age = age
    }

    get name(){
        return this._name;
    }

    get age(){
        return this._age;
    }

    toString(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }

}

const p = new Person(
    faker.person.fullName(),
    faker.number.int({min: 18, max: 80})
);

console.log(p);