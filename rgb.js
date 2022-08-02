// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal 
// representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range 
// must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b) {
    const hexa = (num) => {
        if(num<0) {
            num=0;
        } else if(num>255) {
            num=255;
        };
        let hexNum;
        hexNum = num.toString(16);
        if(hexNum.length<2) {
            hexNum = ("a0" + hexNum).substring(1);
        };
        hexNum = hexNum.toUpperCase(hexNum);
        return hexNum;
    };
    let output = "a";
    output = (output + hexa(r) + hexa(g) + hexa(b)).substring(1);
    console.log(output);
    return output;
};

rgb(255, 255, 255); // expect FFFFFF
rgb(255, 255, 300); // expect FFFFFF
rgb(0, 0, 0); // expect 000000
rgb(148, 0, 211); // expect 9400D3
rgb(12,-45,177); // expect 0C00B1
