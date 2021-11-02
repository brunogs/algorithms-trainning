const str = "agbiwjiwafiafwaagb"

const greater_sequence_of_chars = function (str) {
    let sequence = ""
    let count = new Map()
    let total = 0
    let window = str.substr(0, str.length - 1)
    while (window.length > 2) {
        for (let i = 0; i <= str.length - window.length; i++) {
            if (str.substr(i).indexOf(window) >= 0) {
                count.set(window, (count.get(window) || 0) + 1)
            }
        }
        window = window.substr(0, window.length - 1)
    }

    for (const [key, value] of count) {
        if (value > total) {
            total = value
            sequence = key
        }
    }
    return sequence
}

console.log(greater_sequence_of_chars(str))