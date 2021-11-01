// const strs = ["flower","flow","flight"]
// const strs = ["dog","racecar","car"]
const strs = ["a"]
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let shorterString = strs[0]
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length > shorterString.length)
            shorterString = strs[i]
    }
    let prefix = ""
    for (let i = 0; i < shorterString.length; i++) {
        const char = strs[0].charAt(i)
        let index = 1
        let sameChar = true
        while (index < strs.length) {
            if (strs[index].charAt(i) === char) {
                sameChar = true
                index++
            } else {
                sameChar = false
                break
            }
        }
        if (sameChar) {
            prefix = prefix.concat(char)
        } else {
            break
        }
    }
    return prefix
};

console.log(longestCommonPrefix(strs))