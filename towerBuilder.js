function towerBuilder(nFloors) {  
    const newArray = [];
    const stringLength = (2*nFloors)-1;
    console.log(stringLength);
    function reverseString(str) {
        return str.split("").reverse().join("");
    };    
    for (i=1; i<=nFloors; i++) {
        let string = "";
        for (j=1; j<=stringLength; j++) {
            string = (string + "*");
        };
        for (k=1; k<=nFloors-i; k++ ) {
            string = string.replace("*", " ");
            string = reverseString(string);
            string = string.replace("*", " ");
        };
        //console.log(string);
        newArray.push(string);
    };
    console.log(newArray);
    return newArray;
};

towerBuilder(1);
towerBuilder(2);
towerBuilder(3);
towerBuilder(4);
towerBuilder(10);

