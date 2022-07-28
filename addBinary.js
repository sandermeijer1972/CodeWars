// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done 
// before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a,b) {
    const sum = a + b;
    const binary = sum.toString(2);
    console.log(binary);
    const binaryString = binary.toString();
    return binaryString;
};

addBinary(1,1); // expect 10
addBinary(5,9); // expect 1110
addBinary(51,12); // expect 111111
addBinary(37,63); // expect 1100100
