'use strict';


const readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n;
let c;

rl.prompt();
rl.on("line", function (answer) {
    if (!n) {
        n = answer
    } else if (!c) {
        c = answer.replace(/\s+$/g, '').split(' ').map(cTemp => parseInt(cTemp, 10));
        console.log(jumpingOnClouds(c));
    } else {
        rl.prompt();
    }
});


function jumpingOnClouds(c) {
    // Write your code here
    let safeCloud = 0;
    let jumps = 0;

    for (let i = 0; i < c.length; i++) {
        if (c[i] === 0) {
            safeCloud++
        } else if (c[i] === 1) {
            safeCloud = 0
        }

        if (safeCloud === 3) {
            jumps++
            safeCloud = 1
        } else if (c[i] === 1 && i !== (c.length - 1)) {
            jumps++
            safeCloud = 0
        } else if (safeCloud > 0 && c[i + 1] === 1 && c[i - 1] === 0) {
            jumps++
            safeCloud = 0
        } else if ((i + 1) === (c.length - 1) && c[i + 1] === 0) {
            jumps++
            i++;
        }
        console.log(`index=${i} jumps=${jumps} currentValue=${c[i]} safeCloud=${safeCloud}`)
    }
    return jumps;
}
