function oneWay(oldStr, newStr) {
    const countChars = new Map()
    for (const oldStrElement of oldStr) {
        countChars.set(oldStrElement, (countChars.get(oldStrElement) ?? 0) + 1)
    }
    let changes = 0
    for (const newStrElement of newStr) {
        if (countChars.has(newStrElement)) {
            countChars.set(newStrElement, countChars.get(newStrElement) - 1)
        }
    }
    for (const [key, value] of countChars) {
        if (value !== 0) {
            changes++
        }
    }
    return changes <= 1
}

console.log(oneWay('pale', 'ple')) // delete one
console.log(oneWay('pales', 'pale')) // delete one
console.log(oneWay('pale', 'bale')) // update one
console.log(oneWay('pale', 'bake')) // update two chars --> not acceptable