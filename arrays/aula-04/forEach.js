const ar = [1.3, 5.2, 6.4, 8.9, 10, 1.2];

ar.forEach((i) => {
    console.log(i);
});


let msg = "";

ar.forEach((item, index) => {
    msg += `item: ${index}, valor: ${item}\n`;
});

console.log(msg);

function test(vlr){
    console.log(vlr);
}

ar.forEach(test);