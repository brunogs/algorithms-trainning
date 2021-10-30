// x = 123
// x = 120
x = -123

const reverseString = function(s) {
    console.log(s)
    let start = 0
    let end = s.length - 1
    while (start < end) {
        const temp  = s[start]
        s[start++] = s[end]
        s[end--] = temp
    }
    return s
};
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const bit32 = Math.pow(2, 31)
    const reversed = reverseString([...x.toString()])
    const result = parseInt(reversed.join(''))
    if (result < (bit32 * -1) || result > bit32 - 1)
        return 0;
    return (x < 0) ? result * -1 : result
};

console.log(reverse(x))