function showPrimes(limit){
    for (number=2; number<= limit; number++)
        if(isPrime(number)) console.log(number); 
}

function isPrime (number){
    for(let factor=2; factor <= number/2 ; factor++){
        if(number % factor == 0)
            return false;
    }
    return true;
}

showPrimes(40);
