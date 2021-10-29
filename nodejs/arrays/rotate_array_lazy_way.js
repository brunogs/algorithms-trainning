// let nums = [1, 2]
// const k = 3

// let nums = [-1,-100,3,99]
// const k = 2

let nums = [1,2,3,4,5,6,7];
const k = 3

// let nums = [1, 2]
// const k = 1

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (nums.length === 1)
        return
    for (let i = nums.length - k; i < nums.length; i++) {
        nums.unshift(nums.pop())
    }
};

rotate(nums, k)
console.log(`result ${nums}`)