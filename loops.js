let person = {
    name: 'hassan',
    age: 32
}

for (const key in person) {
       console.log(key, person[key]);
}

let colors = ['red','green','blue'];

for (const index in colors) {
    console.log(index, colors[index]);
}

for (const color of colors) {
    console.log(color);
}