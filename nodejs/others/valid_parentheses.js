// const s = "()[]{}"
// const s = "([)]"
const s = "{[]}"

const opening = new Set(['(', '[', '{'])
const pairs = new Map
pairs.set('(', ')')
pairs.set('[', ']')
pairs.set('{', '}')

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0) return true
    if (s.length === 1) return false

    const pendentChars = []

    for (const char of s) {
        if (opening.has(char)) {
            pendentChars.push(char)
        } else {
            const openChar = pendentChars.pop()
            if (char !== pairs.get(openChar)) {
                return false
            }
        }
    }
    return pendentChars.length === 0
};

console.log(isValid(s))