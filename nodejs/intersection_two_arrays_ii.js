const nums1 = [1,2,2,1], nums2 = [2,2]
// const nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// const nums1 = [1,2], nums2 = [1,1]
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersectUsingMap = function(nums1, nums2) {
    const map = new Map()
    const result = []
    nums1.forEach(it => map.set(it, (map.get(it) + 1 || 1)))
    nums2.forEach(it => {
        const count = map.get(it)
        if (count > 0) {
            result.push(it)
            map.set(it, count - 1)
        }
    })
    return result
};

/**
 * * This solutions not resolve all the tests
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort()
    nums2.sort()
    let i = 0
    let j = 0
    const result = []
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] == nums2[j]) {
            result.push(nums1[i])
            i++
            j++
        } else if (nums1[i] < nums2[j]) {
            i++
        } else {
            j++
        }
    }
    return result
};

console.log(intersect(nums1, nums2))