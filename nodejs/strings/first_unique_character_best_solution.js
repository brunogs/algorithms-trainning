// s = "leetcode"
// s = "loveleetcode"
// s = "aabb"
s = "aadadaad"

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const charCount = new Map
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1)
    }
    console.log(charCount)
    for (let i = 0; i < s.length; i++) {
        if (charCount.get(s.charAt(i)) === 1)
            return i
    }
    return -1
};

console.log(firstUniqChar(s))