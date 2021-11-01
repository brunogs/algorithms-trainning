// const haystack = "hello", needle = "ll"
// const haystack = "aaaaa", needle = "bba"
const haystack = "", needle = ""

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0)
        return 0
    for (let i = 0; i < haystack.length + needle.length; i++) {
        console.log(`comparing ${haystack.charAt(i)} with ${needle.charAt(0)} index=${i}`)
        if (haystack.charAt(i) === needle.charAt(0)) {
            let count = 1
            while (count < needle.length && haystack.charAt(i + count) === needle.charAt(count)) {
                count++
            }
            if (count === needle.length)
                return i
        }
    }
    return -1
};

console.log(strStr(haystack, needle))