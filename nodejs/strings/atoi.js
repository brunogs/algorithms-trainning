// const s = "42"
// const s = "   -42"
// const s = "4193 with words"
// const s = "words and 987"
const s = "-91283472332"

const isNumber = function (s) {
    console.log(`${s && s.match(/[0-9]/)}`)
    return s && s.match(/[0-9]/)
}

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    //ignore leading whitespaces
    //check signal character
    //read all digits until the next non-digit
    //keep result bound in the range [-2.pow(31), 2.pow(31) - 1]

    let text = ""
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) !== ' ') {
            text = s.substring(i)
            break
        }
    }
    console.log(text)
    let resultSignal = ""
    let resultNumber = ""
    let index = 0
    if (text.charAt(index).match(/[+|-]/)) {
        resultSignal = text.charAt(index)
        index++
    }
    console.log(text)
    while (index < text.length && isNumber(text[index])) {
        resultNumber = resultNumber.concat(text.charAt(index))
        index++
    }
    console.log(resultNumber)
    if (resultNumber.length === 0) {
        return 0
    } else {
        console.log(`signal ${resultSignal} numer ${resultNumber}`)
        const result = resultSignal === "-" ? parseInt(resultNumber) * -1 : parseInt(resultNumber)
        return (result > 0) ? Math.min(Math.pow(2, 31) - 1, result) : Math.max(Math.pow(2, 31) * -1, result)
    }
};
console.log(myAtoi(s))