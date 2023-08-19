

function test1(){
    const cliente = {
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

    // exibindo tipos
    console.log('Exibindo tipos: ')
    for(let key in cliente){
        console.log(typeof (cliente[key]));
    }

    // exibindo valores
    console.log('Exibindo valores: ')
    for(let key in cliente){
        if (!(typeof cliente[key] === 'function')){
            console.log(cliente[key]);
        }
    }
}

// testando tipos
function test2(){
    const var1 = "";
    const var2 = () => {};
    const var3 = {}

    console.log(typeof var1);
    console.log(typeof var2);
    console.log(typeof var3);            
    
}

test1();
test2();