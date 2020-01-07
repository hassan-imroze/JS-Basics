let array = [3,4];

// adding at the end
array.push(7,8);
console.log(array);
// adding at the beginning
array.unshift(1,2);
console.log(array);
// adding at the middle
array.splice(4,0,5,3); // starting index, delete count, added elements
console.log(array);

console.log(array.indexOf(3));

console.log(array.indexOf(3,3)); // item, search from index

console.log(array.lastIndexOf(3));

// searc if an element exists
console.log(array.includes(7));

const courses = [
                 { id: 1, name: 'a'},
                 { id: 2, name: 'b'},
                 { id: 2, name: 'c'}
                ];

// uses a predicate to find the object
const foundCourse = courses.find(function(course){
    return course.name === 'b';
});
console.log(foundCourse);
// uses a predicate to find the index of an object
const foundIndex = courses.findIndex(function(course){
    return course.name === 'b';
});
console.log(foundIndex);

// Arrow Function
const foundCourse2 = courses.find(course => course.name === 'a');
console.log(foundCourse2);

array = [1,2,3,4,6,7];
// removing from the end
let last = array.pop();
console.log(array);
console.log(last);
// adding at the beginning
let first = array.shift();
console.log(array);
console.log(first);
// adding at the middle
array.splice(2,1); // starting index, delete count
console.log(array);

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2,4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

var parts = ['shoulders', 'knees']; 
var parts2 = ['eyes', 'ears']; 
var lyrics = ['head', ...parts, 'and', 'toes',...parts2]; 
// ["head", "shoulders", "knees", "and", "toes",'eyes', 'ears']
console.log(lyrics);

const array5 = ['a', 'b', 'c'];

array5.forEach(element => console.log(element));
// expected output: "a"
// expected output: "b"
// expected output: "c"

array5.forEach((element,index) => console.log(`${index}:${element}`));
// expected output: 0:"a"
// expected output: 1:"b"
// expected output: 2:"c"

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

var str = 'The quick brown fox jumps over the lazy dog.';
var words = str.split(' ');
console.log(words);
// expected output: [ 'The',   'quick','brown', 'fox','jumps', 'over','the',   'lazy','dog.']

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array6 = [1, 30, 4, 21, 100000];
array6.sort((a,b)=> a-b); // for sorting numbers
console.log(array6);
// expected output: Array [1, 4, 21, 30, 10000]

  

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
  
// sort by value
var sortedByValue = items.sort(function (a, b) {
    return a.value - b.value;
  });

console.log(sortedByValue);

// sort by name
var sortedByName = items.sort(function(a, b) {
var nameA = a.name.toUpperCase(); // ignore upper and lowercase
var nameB = b.name.toUpperCase(); // ignore upper and lowercase
if (nameA < nameB) {
    return -1;
}
if (nameA > nameB) {
    return 1;
}

// names must be equal
return 0;
});

console.log(sortedByName);

// Every
[12, 5, 8, 130, 44].every(x => x >= 10); // false
[12, 54, 18, 130, 44].every(x => x >= 10); // true​

function isBiggerThan10(element, index, array) {
    return element > 10;
  }
  // Some
  [2, 5, 8, 1, 4].some(isBiggerThan10);  // false
  [12, 5, 8, 1, 4].some(isBiggerThan10); // true

const wordList = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = wordList.filter(word => word.length > 6);

const liItems = result.map(x=> `<li>${x}</li>`);
console.log(liItems);

let map = Array.prototype.map;
let a = Array.prototype.map.call('Hello World', function(x) { 
  return x.charCodeAt(0)
})

console.log(a);

console.log(parseInt('33',10));


let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x
    , initialValue
)

console.log(sum) // logs 6