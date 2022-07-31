
// using an extra data structure
function isUniqueMap(text) {
    const unique = new Map()
    for (let i = 0; i < text.length; i++) {
        if (unique.has(text.at(i))) {
            return false
        }
        unique.set(text.at(i), 0)
    }
    return true
}

// using only the original string
function isUnique(text) {
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < text.length; j++) {
            if (i === j) {
                continue
            }
            if (text.at(i) === text.at(j)) {
                return false
            }
        }
    }
    return true
}

console.log(isUnique("aline"))