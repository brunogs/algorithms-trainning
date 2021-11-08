// const nums = [-2,1,-3,4,-1,2,1,-5,4]
// const nums = [5,4,-1,7,8]
const nums = [-2,-1]

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums) return 0
    if (nums.length === 1) return nums[0]

    let largestTotal = nums[0]
    let current = 0

    for (let i = 0; i < nums.length; i++) {
        current += nums[i]

        if (current > largestTotal) {
            largestTotal = current
        }
        if (current < 0)
            current = 0
        console.log(`${current} -- ${largestTotal}`)
    }
    return largestTotal
};

console.log(maxSubArray(nums))