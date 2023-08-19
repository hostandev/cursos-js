const ar1 = [1,2,3,4,5];
const ar2 = ar1;

ar2.push(0);
console.log(ar1);
console.log(ar2);

ar3 = [...ar2];
ar3.push(8);
console.log(ar3);

ar4 = [...ar3, 9];
ar3.pop();

console.log(ar3);
console.log(ar4);