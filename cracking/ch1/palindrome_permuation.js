
// iteration way
function isPalindrome(input) {
    let start = 0
    let end = input.length - 1
    while (start < end) {
        if (input.at(start) === ' ') {
            start++
        }
        if (input.at(end) === ' ') {
            end--
        }
        if (input.at(start) !== input.at(end)) {
            return false
        }
        start++
        end--
    }
    return true
}

function isPalindromePermutation(input) {
    // TODO
    return false
}

console.log(isPalindrome("taco cat"))
console.log(isPalindrome("tact coa"))