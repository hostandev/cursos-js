// classes x funções
/**
 * A partir da versão ES6 o JS ganhou a possibilidade de declarar classes.
 * Anteriormente, para criar um objeto a partir de uma classe, era necessário
 * criar os objetos utilizando funções.
 * Atualmente, apesar de já existir a sintaxe de classe, também conhecida em 
 * outras linguagens, o tipo resultante ainda é um function.
 */

const {faker} = require('@faker-js/faker');

function test1(){


    // criação de objeto literal
    const account1 = {
        type: faker.finance.accountName(),
        number: faker.finance.accountNumber(),
        owner: faker.person.fullName(),
        amount: faker.number.float({min: 10, max: 5000, precision: 0.01}),
        deposit: function(value) {
            this.amount += value;
        },
        withdraw: function(value){
            this.amount -= value;
        },
        transfer: function(otherAccount, value){
            this.withdraw(value);
            otherAccount.deposit(value);
        }
    };

    const account2 = {
        type: faker.finance.accountName(),
        number: faker.finance.accountNumber(),
        owner: faker.person.fullName(),
        amount: faker.number.float({min: 10, max: 5000, precision: 0.01}),
        deposit: function(value) {
            this.amount += value;
        },
        withdraw: function(value){
            this.amount -= value;
        },
        transfer: function(otherAccount, value){
            this.withdraw(value);
            otherAccount.deposit(value);
        }
    };

    console.log(account1);
    console.log(account2);

    account1.deposit(100.0);
    account2.withdraw(50.0);
    account2.transfer(account1, 10.0);

    console.log(account1);
    console.log(account2);
}

// declarando e utilizando um modelo.

class Account {
    constructor(type, number, owner, amount){
        this.type = type
        this.number = number
        this.owner = owner
        this.amount = amount
    }

    deposit(value) {
        this.amount += value;
    }

    withdraw(value) {
        this.amount -= value;
    }

    transfer(account, value) {
        this.amount -= value;
        account.deposit(value);
    }

    toString(){
        return `Account number: ${this.number}, ` +
            `Amount: ${this.amount}.`;

    }
}

function test2(){

    const accounts = [];
    for (let i = 0; i < 2; i++){
        accounts[i] = new Account(
            faker.finance.accountName(),
            faker.finance.accountNumber(),
            faker.person.fullName(),
            faker.number.float({min: 10, max: 5000, precision: 0.01})
        );
    }

    console.log(accounts[0].toString());
    console.log(accounts[1].toString());

    accounts[0].deposit(100.0);
    accounts[1].withdraw(50.0);
    accounts[1].transfer(accounts[0], 10.0);    

    console.log(accounts[0].toString());
    console.log(accounts[1].toString());

}

test2();