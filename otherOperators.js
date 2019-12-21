let points = 110; 
let type = points > 100 ? 'gold' : 'silver';

console.log(type);

console.log(false && true); // takes true as first parameter is falsy
console.log(false && 'Mosh'); // takes 'Mosh' as first parameter is falsy
console.log(false && 1); // takes 1 as first parameter is falsy

console.log(true && true); // takes true as first parameter is falsy
console.log(true && 'Mosh'); // takes 'Mosh' as first parameter is falsy
console.log(true && 1); // takes 1 as first parameter is falsy



console.log(false || true); // takes true as first parameter is falsy
console.log(false || 'Mosh'); // takes 'Mosh' as first parameter is falsy
console.log(false || 1); // takes 1 as first parameter is falsy

console.log(true || true);  // takes true as first parameter is truthy
console.log(true || 'Mosh'); // takes true as first parameter is truthy
console.log(true || 1); // takes true as first parameter is truthy

// Operation starts from falsy untill it reaches a truth value (which is Mosh)
console.log(false || '' || 'Mosh' || 'Ibrahim');

// Real Life Usage 
let defaultColor = 'blue';
let userColor = 'red';
let currentColor = userColor || defaultColor;
console.log(currentColor);

// Used for binary Operations
// 1 = 00000001; 
// 2 = 00000010;

console.log(1 | 2); //Bitwise OR (3)
console.log(1 & 2); //Bitwise AND (0)

// Real World Example
// Permission for Read, Write & Execute
// 00000100 [Only Read]
// 00000010 [Only Write]
// 00000001 [ Execute]

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
// Setting read write permission
myPermission = myPermission | readPermission | writePermission; 

// Evaluates permissions
console.log("Read Permission:",(myPermission & readPermission) ? 'yes' : 'no');
console.log("Write Permission:",(myPermission & writePermission) ? 'yes' : 'no');
console.log("Execute Permission:",(myPermission & executePermission) ? 'yes' : 'no');

