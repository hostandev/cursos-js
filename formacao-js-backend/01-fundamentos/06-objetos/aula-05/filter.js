const pessoas = require('./new_persons.json');

function filtraPessoasMenoresQue20Anos(lista){    
    return lista.filter(
        (pessoa) => pessoa["age"] < 20
    );
}

function filtraPessoasComSalariosMenoresQue2k(lista){
    return lista.filter(
        (pessoa) => pessoa["salary"] < 1300.0
    );
}

const pessoasMenoresQue20Anos = filtraPessoasMenoresQue20Anos(pessoas);
const pessoasComSalariosMenoresQue2k = 
    filtraPessoasComSalariosMenoresQue2k(pessoas);

// console.log(pessoasMenoresQue20Anos);
console.log(pessoasComSalariosMenoresQue2k);
