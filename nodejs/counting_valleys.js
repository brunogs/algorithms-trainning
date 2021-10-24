'use strict';


const readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let steps;
let path;

rl.prompt();
rl.on("line", function (answer) {
    if (!steps) {
        steps = answer
    } else if (!path) {
        path = answer;
        console.log(countingValleys(steps, path));
    } else {
        rl.prompt();
    }
});


function countingValleys(steps, path) {
    // Write your code here
    let downhill = 0;
    let lastValue = 0;
    let valleys = 0;
    for (const c of path) {
        if (c == 'U') {
            lastValue = downhill;
            downhill--;
        } else if (c == 'D') {
            lastValue = downhill;
            downhill++;
        }
        if (lastValue > 0 && downhill === 0) {
            valleys++
        }
    }
    return valleys;
}
