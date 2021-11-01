const haystack = "hello", needle = "ll"
// const haystack = "aaaaa", needle = "bba"
// const haystack = "", needle = ""

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0)
        return 0

    let window = haystack.substr(0, needle.length)
    for (let i = 0; i < haystack.length - needle.length; i++) {
        if (window === needle) return i
        else {
            window = haystack.substr(i + i, needle.length)
        }
    }
    return -1
};

console.log(strStr(haystack, needle))