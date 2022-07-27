// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// example: arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// example: arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a,b) {
    const c = [];
    for (i=0; i<a.length; i++) {
        if(!b.includes(a[i])) {
            c.push(a[i]);
        };
    };
    console.log(c);
    return c;
};

// TESTS

arrayDiff([1,2], [1]); // expect [2]
arrayDiff([1,2,2], [1]); // expect [2,2]
arrayDiff([1,2,2], [2]); // expect [1]
arrayDiff([1,2,2], []); // expect [1,2,2]
arrayDiff([], [1,2]); // expect []
arrayDiff([1,2,3], [1,2]); // expect [3]
