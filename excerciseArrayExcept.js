let input = [1,2,5,7,1,2,7,8];
let output = exclude(input,[1,2]);

console.log(output);

function exclude(array,excluded){
    let output =[];

    for (const item of array) {
        if(!excluded.includes(item))
            output.push(item);
    }
    return output;
}