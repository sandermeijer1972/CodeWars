// This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid

function multiply(a, b) {
    const aNumber = parseInt(a);
    const bNumber = parseInt(b);
    const multipliedNumber = aNumber * bNumber;
    const output = multipliedNumber.toString();
    console.log(multipliedNumber.toString());
};

multiply("2", "3"); // "6"
multiply("30", "69"); //"2070"
multiply("11", "85"); //935

