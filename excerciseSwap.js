let x = 'red';
let y = 'blue';

let z = y;
y = x || y;
x= z;
console.log(x);
console.log(y);