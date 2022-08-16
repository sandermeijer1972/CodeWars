// Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, 
// and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, 
// which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

// Examples
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]); // => true
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2], 
//   [6, 7, 2, 1, 9, 0, 3, 4, 8],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]); // => false

function validSolution(board) {
    let falseCounter = 0;
    const checkZeroes = (array) => {
        if(array.includes(0)) {
            falseCounter++;
        };
    };
    const checkNineNumbers = (arr) => {
        for(j=1; j<=9; j++) {
            if(!arr.includes(j)) {
                falseCounter++;
            };
        };
    };
    for(i=0; i<9; i++) {
        checkZeroes(board[i]);
    };    
    if(falseCounter>=1) {
        console.log("0 gevonden!!");
        return false;
    };
    for(row=0; row<9; row++) {
        checkNineNumbers(board[row]);
    };
    if(falseCounter>=1) {
        console.log("niet alle getallen in een rij!");
        return false;
    };
    for(col=0; col<9; col++) {
        const newArray = [];
        for(k=0; k<9; k++) {
            newArray.push(board[k][col]);            
        };
        checkNineNumbers(newArray);
            if(falseCounter>=1) {
                console.log("niet alle getallen in een kolom!");
                return false;
            };
    };
    const block = [];
    for(z=0; z<3; z++) {
        block.push(board[z][0]);
        block.push(board[z][1]);
        block.push(board[z][2]);
    };
    //console.log(block);
    checkNineNumbers(block);
    if(falseCounter>=1) {
        console.log("niet alle getallen in een blok!");
        return false;
    };
    return true;
};


console.log(validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
])); // => true
console.log(validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
])); // => false

console.log(validSolution([
    [1, 2, 3, 4, 5, 6, 7, 8, 9], 
    [2, 3, 1, 5, 6, 4, 8, 9, 7], 
    [3, 1, 2, 6, 4, 5, 9, 7, 8], 
    [4, 5, 6, 7, 8, 9, 1, 2, 3], 
    [5, 6, 4, 8, 9, 7, 2, 3, 1], 
    [6, 4, 5, 9, 7, 8, 3, 1, 2], 
    [7, 8, 9, 1, 2, 3, 4, 5, 6], 
    [8, 9, 7, 2, 3, 1, 5, 6, 4], 
    [9, 7, 8, 3, 1, 2, 6, 4, 5]
])); // => false

console.log(validSolution([
    [1, 2, 6, 3, 4, 7, 5, 9, 8],
    [7, 3, 5, 8, 1, 9, 6, 4, 2],
    [1, 9, 4, 2, 7, 5, 8, 6, 3],
    [3, 1, 7, 5, 8, 4, 2, 6, 9],
    [7, 5, 9, 1, 6, 2, 4, 3, 8],
    [4, 8, 2, 9, 3, 6, 7, 1, 5],
    [1, 4, 8, 7, 5, 9, 3, 2, 6],
    [5, 6, 1, 4, 2, 3, 9, 8, 7],
    [2, 7, 3, 6, 9, 1, 8, 5, 4]
])); // => false)

console.log(validSolution([
    [8, 2, 6, 3, 4, 7, 5, 9, 1],
    [7, 3, 5, 8, 1, 9, 6, 4, 2],
    [1, 9, 4, 2, 6, 5, 8, 7, 3],
    [3, 1, 7, 5, 8, 4, 2, 6, 9],
    [6, 5, 9, 1, 7, 2, 4, 3, 8],
    [4, 8, 2, 9, 3, 6, 7, 1, 5],
    [9, 4, 8, 7, 5, 1, 3, 2, 6],
    [5, 6, 1, 4, 2, 3, 9, 8, 7],
    [2, 7, 3, 6, 9, 8, 1, 5, 4]
])); // => true