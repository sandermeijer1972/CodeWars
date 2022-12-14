// Define a function that takes an integer argument and returns a logical value true or false depending on 
// if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive 
// divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).

function isPrime(num) {
    let outPut; 
    if (num<=1) {
        outPut = false;
    } else {
        const newArray = [];
        for(i=1; i<=num; i++) {
            if (num%i == 0) {
                newArray.push(i);
                if (newArray.length > 2) {
                    outPut = false;
                    console.log(outPut);
                    return outPut;
                };
            };
        };
        outPut = true;
    };
    console.log(outPut);
    return outPut;
};

isPrime(-1);
isPrime(0);
isPrime(1);
isPrime(2);
isPrime(10);
isPrime(6007);
isPrime(7229);
isPrime(7228);
isPrime(104729);
