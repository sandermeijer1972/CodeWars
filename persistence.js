// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
    let digits = (""+num).split("");
    const countArray = [];
    while (digits.length > 1) {
        let multiplied = parseInt(digits[0]);
        for (i=1; i<digits.length; i++) {
            multiplied = multiplied * parseInt(digits[i]);
        };
        //console.log(multiplied);
        countArray.push(1);
        digits = (""+multiplied).split("");
    };
    console.log(num + " moet " + countArray.length + " keer vermenigvuldigd worden");
    return countArray.length;
};

persistence(39);
persistence(999);
persistence(4);
