// const digits = [1,2,3]
const digits = [4,3,2,1]
// const digits = [0]
// const digits = [9]
// const digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let stringDigits = digits.join('')
    const digitsPlusOne = BigInt(stringDigits) + 1n
    const numbersResult = []
    for (const i of digitsPlusOne.toString()) {
        numbersResult.push(parseInt(i))
    }
    return numbersResult
};

console.log(plusOne(digits))