let numbers = arrayFromRange(-2,4);
console.log(numbers);

function arrayFromRange(min,max){
    let output =[];

    for (let number = min; number <= max; number++) {
        output.push(number);
    }
    return output;
}