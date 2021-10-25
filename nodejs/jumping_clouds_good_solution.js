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
    let jumps = -1;
    for (let i = 0; i < c.length; i++) {
        jumps++; //one jump
        if (i < c.length - 1 && c[i + 2] === 0)
            i++;
        //if it is not the last position and the two positions ahead are safe we can by pass the index array
        //It means that we are jumping two positions
    }
    return jumps;
}
