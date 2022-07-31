// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

function expandedForm(num) {
    const number = num.toString();
    const numLength = number.length;
    const newArray = [];
    for (i=0; i<numLength; i++) {
        let numDec = number[i];
        if(numDec>0) {
            for (j=1; j<numLength-i; j++) {
                numDec = numDec + "0";
            };
            newArray.push(numDec);
        };        
    };
    const makeOutputString = (array) => {
        let str = array[0];
        for (k=1; k<array.length; k++) {
            str = (str + " + " + array[k]);
        };
        return str;
    };
    const outputString = makeOutputString(newArray);
    console.log(outputString);
    return outputString;
};

expandedForm(2);
expandedForm(12);
expandedForm(123);
expandedForm(34067);
expandedForm(38295600253);
