//const nums = [2,7,11,15], target = 9
const nums = [1,3,4,2], target = 6

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const subtractionResults = new Map()
    for (let i = 0; i < nums.length; i++) {
        subtractionResults.set(target - nums[i], i)
    }
    console.log(nums)
    console.log(subtractionResults)
    let n = 0
    while(n < nums.length - 1) {
        const rest = target - nums[n]
        const gap = target - rest
        const solution = subtractionResults.get(gap)
        if (solution && solution !== n) {
            return [n, solution]
        }
        n++
    }
};

console.log(twoSum(nums, target))