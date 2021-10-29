// const nums = [0,1,0,3,12]
const nums = [0]
// const nums = [1]
// const nums = [1,0,1]
// const nums = [45192,0,-659,-52359,-99225,-75991,0,-15155,27382,59818,0,-30645,-17025,81209,887,64648]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let totalNonZeros = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            let n = i
            while (nums[n] === 0 && n < (nums.length - 1)) {
                n++
            }
            if (nums[n] !== 0) {
                totalNonZeros++
                nums[i] = nums[n]
                nums[n] = 0
            }
            if (n === nums.length - 1)
                break
        } else {
            totalNonZeros++
        }
    }
};

moveZeroes(nums)
console.log(nums)