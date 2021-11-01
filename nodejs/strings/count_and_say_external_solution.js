const n = 4

//I found this solution here: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/886/discuss/1546013/JavaScript-Easy-To-Understand-Solution
const countSay = (say) => {
    let count = 1;
    let i = 0;
    let result = '';
    const n = say.length;
    // Loop over each letter of the current say
    while (i < n) {
        // Only increase the count if we have an identical consecutive letter
        while (i + 1 < say.length && say[i] === say[i + 1]) {
            count++;
            i++;
        }
        // Dump the built value before continuing to the next letter
        result += `${count}${say[i]}`;
        count = 1;
        i++;
    }

    return result;
};

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    // Start with the expected default value
    let say = "1";
    // Use a top level loop to iterate through each count spoken
    for (let i = 0; i < n - 1; i++) {
        // Capturing the returned value here lets us simplify this algorithm greatly
        say = countSay(say);
    }

    return say;
};

console.log(countAndSay(n))