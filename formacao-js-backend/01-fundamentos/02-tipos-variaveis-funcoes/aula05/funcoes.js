// funções 

function soma(a, b){
    return a + b;
}

function hello(){
    return "Hello World";
}

function hello2(name){
    return `Hello ${name}`;
}

console.log(soma(1, 2));
console.log(hello());
console.log(hello2("Luciano"));

// Testando outras funções

console.log(Math.ceil(4.6));
console.log(Math.trunc(4.6));
console.log(Math.pow(4, 2));
console.log(Math.min(0, 12, 24, 40, 33));
console.log(Math.max(0, 12, 24, 40, 33));
console.log(Math.trunc((Math.random() * 10) + 1, 2));