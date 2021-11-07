
isBadVersion = function(version) {
    return version >= 4
};

const n = 5

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {

    const search = function (min, max) {
        if (max === 0) throw Error
        console.log(`searching between ${min} and ${max}`)

        const middle = Math.floor((min + max) / 2)
        const isPreviousBadVersion = isBadVersion(middle)
        console.log(isPreviousBadVersion)
        if (!isPreviousBadVersion && isBadVersion(middle + 1)) {
            return middle + 1
        } else if (isPreviousBadVersion) {
            return search(min, middle)
        } else {
            return search(middle + 1, max)
        }
    }

    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (n <= 1) return n
        return search(0, n)
    };
};

console.log(solution(isBadVersion)(n))