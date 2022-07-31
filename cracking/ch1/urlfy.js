/*
replace all spaces in a string with '%20'.
You may assume that the string has sufficient space at the end to hold the additional characters
 */

function urlfy(input, length) {
    let output = ''
    for (let i = 0; i < length; i++) {
        if (input.at(i) === ' ') {
            output += '%20'
        } else {
            output += input.at(i)
        }
    }
    return output
}

console.log(urlfy("Mr John Smith     ", 13))