const faker = require('faker');

const cliente = {
    nome: faker.name.findName(), 
    idade: 35, 
    enderecos: [
        {
            tipo: 'Residencial',
            logradouro: 'Rua 1',
            numero: 1,
            cidade: 'São Paulo',
            estado: 'SP'
        },{
            tipo: 'Comercial',
            logradouro: 'Rua 100',
            numero: 11,
            cidade: 'Campinas',
            estado: 'SP'
        },
    ],
    saldo: 100.0,
    deposita: function (valor) {
        if (valor > 0.0) {
            this.saldo += valor;                
        } else {
            console.log('Operação não permitida.')
        }
    }
};

const chaves = Object.keys(cliente);

chaves
    .filter((item) => typeof cliente[item] != 'function')
    .forEach((item) => console.log(cliente[item]));