'use strict';


const readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let s;
let q;

rl.prompt();
rl.on("line", function (answer) {
    if (!s) {
        s = answer
    } else if (!q) {
        q = answer.replace(/\s+$/g, '').split(' ').map(qTemp => parseInt(qTemp, 10));
        minimumBribes(q);
    } else {
        rl.prompt();
    }
});


function minimumBribes(q) {
    const wrongPositions = findWrongPositions(q);
    console.log(wrongPositions)
    let numberOfBribes = 0
    for (const wrong of wrongPositions) {
        const stickerValue = q[wrong]
        if (((stickerValue - 1) - wrong) >= 3) {
            console.log("Too chaotic");
            return;
        } else {
            numberOfBribes += ((stickerValue) - wrong)
        }
    }
    console.log(numberOfBribes);
}

function findWrongPositions(array) {
    const pivot = Math.ceil(array.length / 2);
    return searchWrongPositions(array, 0, pivot).concat(searchWrongPositions(array, pivot + 1, array.length - 1))
}

function searchWrongPositions(array, start, end) {
    if ((end - start) === 0) {
        if (start < array.length - 1 && array[start] > array[start + 1])
            return [start]
        else
            return []
    } else {
        const pivot = start;
        return searchWrongPositions(array, start, pivot).concat(searchWrongPositions(array, pivot + 1, end))
    }
}
