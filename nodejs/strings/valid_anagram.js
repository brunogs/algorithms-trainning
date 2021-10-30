// const s = "anagram", t = "nagaram"
// const s = "rat", t = "car"
// const s = "aa", t = "bb"
// const s = "aabbbb", t = "aaaabb"
const s = "anagram", t = "nagaram"

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length)
        return false
    const charCount = new Map
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i)
        charCount.set(char, (charCount.get(char) || 0) + 1)
    }
    for (let i = 0; i < t.length; i++) {
        const char = t.charAt(i)
        const value = charCount.get(char)
        if (!value)
            return false
        charCount.set(char, value - 1)
    }
    return true
};

console.log(isAnagram(s, t))