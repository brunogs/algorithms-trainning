// s = "leetcode"
// s = "loveleetcode"
// s = "aabb"
s = "aadadaad"

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const uniqueChars = new Set
    const knownChars = new Set
    for (const char of s) {
        if (uniqueChars.has(char) || knownChars.has(char)) {
            uniqueChars.delete(char)
        } else {
            uniqueChars.add(char)
            knownChars.add(char)
        }
    }
    const first = uniqueChars.values().next().value
    return (first) ? s.indexOf(first) : -1
};

console.log(firstUniqChar(s))