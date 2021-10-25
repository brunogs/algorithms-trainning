'use strict';


const readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let s;
let n;

rl.prompt();
rl.on("line", function (answer) {
    if (!s) {
        s = answer
    } else if (!n) {
        n = parseInt(answer.trim(), 10);
        console.log(repeatedString(s, n));
    } else {
        rl.prompt();
    }
});


function repeatedString(s, n) {
    const stringSize = s.length
    let countALetter = 0;
    for (const c of s) {
        if (c == 'a') countALetter++;
    }
    const setOfLetters = Math.floor(n / stringSize)
    const mod = Math.floor(n % stringSize)

    //The hard part here is to think about the rest and remember to round the numbers down
    let additionalLetters = 0
    for (let i = 0; i < mod; i++) {
        if (s.charAt(i) == 'a') additionalLetters++;
    }
    const total = Math.floor(countALetter * setOfLetters)
    console.log(`size=${stringSize} count of a=${countALetter} set of letters=${setOfLetters} so ${total} and mod=${mod}`)

    return total + additionalLetters;
}
