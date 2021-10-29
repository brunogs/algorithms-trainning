// let nums = [1, 2]
// const k = 3

// let nums = [-1,-100,3,99]
// const k = 2

let nums = [1,2,3,4,5,6,7];
const k = 3

// let nums = [1, 2]
// const k = 1

const reverse = function(nums, start, end) {
    while (start < end) {
        const temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)
};

rotate(nums, k)
console.log(`result ${nums}`)