// parâmetros

function imprime(nome, idade, cidade){
    console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);
}

imprime("Luciano", 10, "São Paulo");

function test(valor1="padrão", valor2="outro valor"){
    console.log(`Primeiro valor ${valor1}, Segundo valor ${valor2}`);
}

test()
test('Valor alterado')