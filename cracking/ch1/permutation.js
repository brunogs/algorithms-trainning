function isPermutation(textA, textB) {
    const characters = new Map()
    for (const t of textA) {
        characters.set(t, (characters.get(t) || 0) + 1)
    }
    for (const t of textB) {
        const count = characters.get(t)
        if (count > 0) {
            characters.set(t, count - 1)
        } else {
            return false
        }
    }
    return true
}

console.log(isPermutation("Hello World", "Hello World"))