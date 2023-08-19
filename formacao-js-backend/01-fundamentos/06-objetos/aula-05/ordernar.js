const persons = require('./new_persons.json');
const {faker} = require('@faker-js/faker');


function ordernar(lista, propriedade){
    const resultado = lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]){
            return -1;
        } else if (a[propriedade] > b[propriedade]) {
            return 1;
        } else {        
            return 0;
        }
    });

    return resultado;
}


function ordernar2(lista){
    const resultado = lista.sort((a, b) => {
        if (a < b){            
            return -1;
        } else if (a > b) {            
            return 1;
        } else {                    
            return 0;
        }
    });

    return resultado;
}


function criaListaDePessoasObj(quantidade){
    const pessoas = [];
    for(let i = 0; i < quantidade; i++){
        const p = {
            nome: faker.person.firstName()
        };
    
        pessoas.push(p);
    }

    return pessoas;
}

function criaListaDePessoasStr(quantidade){
    const pessoas = [];
    for(let i = 0; i < quantidade; i++){   
        pessoas.push(faker.person.firstName());
    }

    return pessoas;
}

const pessoas = criaListaDePessoasStr(4);

// const pessoasOrdenados = ordernar(pessoas, "nome");
const pessoasOrdenados = ordernar2(pessoas);
// console.log(pessoas);
console.log(pessoasOrdenados);