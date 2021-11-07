// const n = 2
const n = 5

const pastResults = new Map
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) return n
    if (n === 2) return 2
    if (pastResults.has(n)) return pastResults.get(n)
    const result = climbStairs(n - 1) + climbStairs(n - 2)
    pastResults.set(n, result)
    return result
};

console.log(climbStairs(n))