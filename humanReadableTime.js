// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable 
// format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// humanReadable(59), '00:00:59'
// humanReadable(60), '00:01:00'
// humanReadable(90), '00:01:30'
// humanReadable(3599), '00:59:59'

function humanReadable (seconds) {    
    const convertToTwoDigits = (getal) => {
        if(getal<10) {
            return "0" + getal;
        } else {
            return getal.toString();
        };
    };
    const hours = Math.floor(seconds/3600);
    const hoursInTwoDigits = convertToTwoDigits(hours);
    console.log("uren: " + hoursInTwoDigits);
    const restAfterHours = seconds%3600;
    //console.log(restAfterHours);
    const minutes = Math.floor(restAfterHours/60);
    const minutesInTwoDigits = convertToTwoDigits(minutes);
    console.log("minuten: " + minutesInTwoDigits);
    const secondsAfterMinutes = restAfterHours%60;
    const secondsInTwoDigits = convertToTwoDigits(secondsAfterMinutes);
    console.log(`seconden: ${secondsInTwoDigits}`);
    const outputString = (hoursInTwoDigits + ":" + minutesInTwoDigits + ":" + secondsInTwoDigits);
    console.log(outputString);
    return outputString;
};

humanReadable(59);
humanReadable(60);
humanReadable(90);
humanReadable(3599);
humanReadable(4000);
humanReadable(359999);
humanReadable(450000);
