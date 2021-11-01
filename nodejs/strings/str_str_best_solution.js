// const haystack = "hello", needle = "ll"
// const haystack = "aaaaa", needle = "bba"
// const haystack = "", needle = ""
const haystack = "mississippi", needle = "issi"

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0)
        return 0

    let window = haystack.substr(0, needle.length)
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        console.log(`comparting ${window} with ${needle} index=${i}`)
        if (window === needle) return i
        else {
            window = haystack.substr(i + 1, needle.length)
        }
    }
    return -1
};

console.log(strStr(haystack, needle))