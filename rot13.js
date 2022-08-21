// How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 
// (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

// Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc.

// Test examples:

// "EBG13 rknzcyr." -->
// "ROT13 example."

// "This is my first ROT13 excercise!" -->
// "Guvf vf zl svefg EBG13 rkprepvfr!"

function rot13(str) {
    const input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
    let newString = "";
    for (i=0; i<str.length; i++) {
        if(!input.includes(str[i])) {
            newString = newString+str[i];
        } else {
            const index = input.indexOf(str[i]);
            newString = newString+output[index];
        };        
    };
    console.log(newString);
    return newString;
};

rot13("hello"); // uryyb
rot13("HeLlo"); // UrYyb
rot13("HELLO"); // URYYB
rot13("hel lo"); // ury yb
rot13("EBG13 rknzcyr."); // ROT13 example.
rot13("This is my first ROT13 excercise!"); // Guvf vf zl svefg EBG13 rkprepvfr!
