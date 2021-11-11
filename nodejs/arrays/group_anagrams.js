// const strs = ["eat","tea","tan","ate","nat","bat"]
// const strs = ["",""]
// const strs = ["ac","c"]
const strs = ["","b",""]

const charsCountByWord = new Map()

const countChars = function (word) {
    const charsCount = new Map()
    console.log(`ops ${word.length}`)
    for (let i = 0; i < word.length; i++) {
        charsCount.set(word.charAt(i), (charsCount.get(word.charAt(i)) || 0) + 1)
    }
    return charsCount
}

const getCountChars = function(word) {
    if (!charsCountByWord.has(word)) {
        charsCountByWord.set(word, countChars(word))
    }
    return charsCountByWord.get(word)
}

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = []
    const usedWord = new Set()
    for (let i = 0; i < strs.length; i++) {
        const currentWord = strs[i]
        if (usedWord.has(strs[i]))
            continue
        const currentWordCount = getCountChars(currentWord)
        console.log(currentWordCount)
        const item = [currentWord]
        for (let j = 0; j < strs.length; j++) {
            if (i !== j) {
                const candidate = getCountChars(strs[j])
                let valid = false
                if (currentWordCount.size !== candidate.size) {
                    continue
                }
                for (const [key, value] of currentWordCount) {
                    if (candidate.get(key) === value) {
                        valid = true
                    } else {
                        valid = false
                        break
                    }
                }
                if (valid || (currentWord.length === 0 && strs[j].length === 0)) {
                    item.push(strs[j])
                    usedWord.add(strs[j])
                }
            }
        }
        result.push(item)
    }
    return result
};

console.log(groupAnagrams(strs))