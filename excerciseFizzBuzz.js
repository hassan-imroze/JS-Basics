// Divisable by 3 return Fizz  
// Divisable by 5 return Buzz  
// Divisable by 3 and 5 return FizzBuzz  
// Not Divisable by 3 or 5 return input
// Not a number return 'Not a number'

console.log(typeof(NaN));

function FizzBuzz(input){
    if(typeof(input) !== 'number'){
        return 'Not a number';
    }
    if((input % 3 === 0) && (input % 5 == 0)){
        return 'FizzBuzz';
    }
    if(input % 3 === 0){
        return 'Fizz';
    }
    if(input % 5 == 0){
        return 'Buzz';
    }
    
    return input;
    
}        

console.log(FizzBuzz(3));
console.log(FizzBuzz(4));
console.log(FizzBuzz(30));
console.log(FizzBuzz(7));
console.log(FizzBuzz(NaN));
console.log(FizzBuzz(null));