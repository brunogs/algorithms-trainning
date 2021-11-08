// const s = "III" //3
// const s = "IV" //4
// const s = "IX" //9
// const s = "LVIII" //58
const s = "MCMXCIV" //1994

const romanAsInt = new Map()
romanAsInt.set('I', 1)
romanAsInt.set('V', 5)
romanAsInt.set('X', 10)
romanAsInt.set('L', 50)
romanAsInt.set('C', 100)
romanAsInt.set('D', 500)
romanAsInt.set('M', 1000)

romanAsInt.set('IV', 4)
romanAsInt.set('IX', 9)
romanAsInt.set('XL', 40)
romanAsInt.set('XC', 90)
romanAsInt.set('CD', 400)
romanAsInt.set('CM', 900)

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if (s.length === 0) return 0

    let n = 0
    let result = 0
    while (n < s.length) {

        const value = romanAsInt.get(s.charAt(n) + s.charAt(n + 1))

        console.log(`${n} --> ${s.charAt(n) + s.charAt(n + 1)} - ${value}`)
        if (value) {
            result += value
            n = n + 2
        } else {
            console.log(`${s.charAt(n)}`)
            result += romanAsInt.get(s.charAt(n))
            n++
        }
    }
    return result
};

console.log(s)
console.log(romanToInt(s))