

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let i = 1
    const result = []
    while (i <= n) {
        let text = ""
        if (i % 3 == 0)
            text += "Fizz"
        if (i % 5 == 0)
            text += "Buzz"
        if (text == "")
            text += i
        result.push(text)
        i++
    }
    return result
};

console.log(fizzBuzz(3))