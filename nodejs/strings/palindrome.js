const s = "A man, a plan, a canal: Panama"
// const s = "race a car"
// const s = " "
// const s = "ab_a"

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length <= 1)
        return true
    const cleanText = s.replaceAll(/[^A-Za-z0-9]/g, '').toLowerCase()
    console.log(cleanText)
    let start = 0
    let end = cleanText.length - 1
    while (start < end) {
        if (cleanText.charAt(start++) !== cleanText.charAt(end--))
            return false
    }
    return true
};

console.log(isPalindrome(s))