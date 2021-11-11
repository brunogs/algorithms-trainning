const strs = ["eat","tea","tan","ate","nat","bat"]
// const strs = ["",""]
// const strs = ["ac","c"]
// const strs = ["","b",""]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (strs.length === 0) return []
    const ans = new Map()

    for (let i = 0; i < strs.length; i++) {
        const currentWord = strs[i]

        const key = [...currentWord].sort().join('')
        if (!ans.has(key)) {
            ans.set(key, [currentWord])
        } else {
            ans.set(key,[currentWord].concat(ans.get(key)))
        }
    }
    const result = []
    for (const [key, value] of ans) {
        result.push(value)
    }
    return result

};

console.log(groupAnagrams(strs))