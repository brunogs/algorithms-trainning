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
    const firstCharCount = new Map
    const secondCharCount = new Map
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i)
        firstCharCount.set(char, (firstCharCount.get(char) || 0) + 1)
    }
    for (let i = 0; i < t.length; i++) {
        const char = t.charAt(i)
        if (!firstCharCount.get(char))
            return false
        secondCharCount.set(char, (secondCharCount.get(char) || 0) + 1)
    }
    for (const [key, value] of firstCharCount) {
        if (value !== secondCharCount.get(key))
            return false
    }
    return true
};

console.log(isAnagram(s, t))