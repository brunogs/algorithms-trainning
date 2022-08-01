function compress(text) {
    let out = ''
    let previous = text.at(0)
    let count = 1
    for (let i = 1; i < text.length; i++) {
        if (text.at(i) === previous) {
            count++
        } else {
            out += previous + count
            count = 1
            previous = text.at(i)
        }
    }
    out += previous + count
    if (out.length >= text.length) {
        return text
    }
    return out
}

console.log("aabccccaaa ->", compress("aabccccaaa"))
console.log("abcd ->", compress("abcd"))