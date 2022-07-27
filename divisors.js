// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the 
// integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return 
// the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(integer) {
    const newArray = [];
    for (i=2; i<integer; i++) {
        if (integer%i == 0) {
            newArray.push(i);
        };        
    };    
    if(newArray.length == 0) {
        const newText = (integer + " is prime");
        newArray.push(newText);
        console.log(newArray[0]);
        return newArray[0];
    };
    console.log(newArray);
    return newArray;
};

// TESTS

divisors(15); // expect [3,5]
divisors(253); // expect [11,23]
divisors(24); // expect [2,3,4,6,8,12]
divisors(13); // expect "13 is prime"
divisors(3); // expect "3 is prime"
divisors(29); // expect "29 is prime"
divisors(32); // expect [2,4,8,16]
