// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two 
// different items in the array that, when added together, give the target value. The indices of these items should 
// then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be 
// numbers; target will always be the sum of two different items from that array).

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

function twoSum(numbers, target) {
    const newArray = [];
    for (i=0; i<numbers.length; i++) {
        for (j=0; j<numbers.length && j!=i; j++) {
            const summed = numbers[i] + numbers[j];
            if (summed === target) {
                console.log(numbers[i] + " + " + numbers[j] + " = " + target);
                newArray.push(i);
                newArray.push(j);
                console.log(newArray);
                return newArray;
            };
        };
    };
};

twoSum([1, 2, 3], 4);
twoSum([1234, 5678, 9012], 14690);
twoSum([711, -994, 768, -958, -895, 856, -755, 210, -737, 787, -841, -924, 908, -611, 69, -780, 394, -820, 548, -169, -860, 474, -381, 296, -61, -692, -412, 484, 385, -247, 164, -940, -496, 661, 846, 82, -90, 740, 42, 349, -67, -944, -153, -345, -393, -917, 923, -126, -278, 180, 786, -755, 23, -992, 348, 368, 609, -229, -129, 4, -198, 644, 447, -304, -314, 627, 643, -227, 175, -223, 503, 209, 564, 875, 860, 867, -975, -781, -717, 115, -363, -247, 130, -757, -183, 383, 254, 176, 107, -525, -506, -303, 198, -249, -423], -1902);

