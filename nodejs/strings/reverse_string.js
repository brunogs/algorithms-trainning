let s = ["h","e","l","l","o"]
//let s = ["H","a","n","n","a","h"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let start = 0
    let end = s.length - 1
    while (start < end) {
        const temp  = s[start]
        s[start++] = s[end]
        s[end--] = temp
    }
};

reverseString(s)
console.log(s)