'use strict';


const readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n;
let ar;

rl.prompt();
rl.on("line", function (answer) {
    if (!n) {
        n = answer
    } else if (!ar) {
        ar = answer.replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));
        console.log(sockMerchant(n, ar));
    } else {
        rl.prompt();
    }
});

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    const sockMap = new Map();
    ar.forEach(it => sockMap.set(it, (sockMap.get(it) || 0) + 1));
    let result = 0;
    for (const value of sockMap.values()) {
        if (value > 2)
            result += Math.floor(value / 2);
        else if (value === 2)
            result++;
    }
    return result;
}
