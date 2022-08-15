// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an 
// array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

function anagrams(word, words) {
    const wordArray = Array.from(word);
    const sortedArray = wordArray.sort();
    //console.log(sortedArray);
    const sortedString = sortedArray.join("");
    //console.log(sortedString);
    const outputArray = [];
    for (let i=0; i<words.length; i++) {
        //console.log("words[i]: " + words[i]);
        let wordsArray = words[i].split("");
        //console.log("wordsArray: " + wordsArray);
        let sortedWord = wordsArray.sort();
        //console.log("sortedWord: " + sortedWord);
        let string = sortedWord.join("");
        //console.log("string: " + string);
        if(sortedString === string) {
            outputArray.push(words[i]);
        };
    };
    console.log(outputArray);
    return outputArray;
};

anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]);
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
anagrams("laser", ["lazing", "lazy", "lacer"]);

