// metodos do array

const ar1 = [1,2,3,4];
const ar2 = [5,6,7,8];
console.log(ar1);
console.log(ar2);

const ar3 = ar1.concat(ar2);
console.log(ar3);

const fi = ar3.filter((n) => n % 2 == 0);
console.log(fi);

const find_ = ar3.find((n) => n == 3);
console.log(find_);

const findIndex_ = ar3.findIndex((n) => n == 3);
console.log(findIndex_);

const lastIndexOf_ = ar3.lastIndexOf();
console.log(lastIndexOf_);

const forEach_ = ar3.forEach((n) => console.log(n));

const firstElement = ar3.shift();
console.log(firstElement);

ar3.push(42);
console.log(ar3);

ar3.unshift(99);
console.log(ar3);

const reduce_ = ar3.reduce((n) => n * 3);
console.log(reduce_);

console.log(ar3.reverse());

console.log(ar3.pop());

const slice_ = ar3.slice(2, 3);
console.log(slice_);


const items = ['a', 'b', 'c'];

items.pop();
items.pop();

items.push('d');
items.push('e');
items.push('f');

console.log(items);