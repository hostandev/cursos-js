// campos multivalorados
function testObjeto1(){
    const cliente1 = {
        nome: 'jose',
        idade: 33,
        telefone: '12-345678'
    };
    
    console.log(cliente1);
    
    const cliente2 = {
        nome: 'jose', 
        idade: 33,
        telefones: ['12-345678', '09-213421'],
    };
    
    console.log(cliente1);
    
    const cliente3 = {
        nome: 'jose', 
        idade: 35, 
        endereco: {
            logradouro: 'Rua 1',
            numero: 1,
            cidade: 'São Paulo',
            estado: 'SP'
        }
    };
    
    console.log(cliente3);
}

// propriedades como objetos
function testObjeto2(){
    const cliente4 = {
        nome: 'jose', 
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
        ]
    };

    // console.log(cliente4);

    console.log(cliente4.enderecos.filter(
        (endereco) => endereco.tipo == 'Residencial'));
}

// adicionando métodos
function testObjeto3(){
    const cliente5 = {
        nome: 'jose', 
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

    console.log(`Cliente: ${cliente5.nome}, ` +
                `Saldo: ${cliente5.saldo}`);


    cliente5.deposita(100.0);
    console.log(`Cliente: ${cliente5.nome}, ` +
                `Saldo: ${cliente5.saldo}`);

}


function testObjeto4(){
    const cliente5 = {
        nome: 'jose', 
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

    const cliente6 = cliente5;

    console.log(`5 - Cliente: ${cliente5.nome}, ` +
                `Saldo: ${cliente5.saldo}`);

    console.log(`6 - Cliente: ${cliente6.nome}, ` +
                `Saldo: ${cliente6.saldo}`); 

    cliente5.deposita(100);
    cliente5.idade = 36;

    console.log(`5 - Cliente: ${cliente5.nome}, ` +
                `Saldo: ${cliente5.saldo}`);

    console.log(`6 - Cliente: ${cliente6.nome}, ` +
                `Saldo: ${cliente6.saldo}`);

    // 
    const cliente7 = Object.create(cliente5);    
    cliente5.deposita(100);
    cliente5.idade = 37;

    console.log(`5 - Cliente: ${cliente5.nome}, ` +
                `Idade: ${cliente5.idade}, ` +
                `Saldo: ${cliente5.saldo}`);

    console.log(`6 - Cliente: ${cliente6.nome}, ` +
                `Idade: ${cliente6.idade}, ` +
                `Saldo: ${cliente6.saldo}`);

    console.log(`7 - Cliente: ${cliente7.nome}, ` +
                `Idade: ${cliente7.idade}, ` +
                `Saldo: ${cliente7.saldo}`);

}

testObjeto4();


