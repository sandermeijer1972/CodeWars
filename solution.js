// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these 
// multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, 
// if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
    if(number<3) {
        console.log(0);
        return 0;
    } else if (number==3) {
        console.log(3);
        return 3;
    } else {
        const newArray = [];
        for(i=3; i<number; i++) {
            if(i%3 == 0 || i%5 == 0) {
                newArray.push(i);
            };
        };        
        const totalSum = newArray.reduce((acc, cur) => acc + cur);
        console.log(totalSum);
        return totalSum;
    };    
};

solution(10); // expect 23

// andere oplossing

function solution2(number){
    var sum = 0;
    
    for(var i = 1;i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }