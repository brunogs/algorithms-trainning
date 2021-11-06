const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//const nums1 = [4,5,6,0,0,0], m = 3, nums2 = [1,2,3], n = 3
/*const nums1 = [-10,-10,-9,-9,-9,-8,-8,-7,-7,-7,-6,-6,-6,-6,-6,-6,-6,-5,-5,-5,-4,-4,-4,-3,-3,-2,-2,-1,-1,0,1,1,1,2,2,2,3,3,3,4,5,5,6,6,6,6,7,7,7,7,8,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
const m = 55
const nums2 = [-10,-10,-9,-9,-9,-9,-8,-8,-8,-8,-8,-7,-7,-7,-7,-7,-7,-7,-7,-6,-6,-6,-6,-5,-5,-5,-5,-5,-4,-4,-4,-4,-4,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,9,9,9,9]
const n = 99*/

const swap = function (nums, firstPosition, secondPosition) {
    console.log(`swap positions ${firstPosition} with ${secondPosition}`)
    const temp = nums[firstPosition]
    nums[firstPosition] = nums[secondPosition]
    nums[secondPosition] = temp
}

const partition = function (nums, start, end) {
    const pivot = nums[end];
    let i = start - 1
    for (let j = start; j <= end - 1; j++) {
        if (nums[j] < pivot) {
            i++;
            swap(nums, i, j)
        }
    }
    console.log(`start ${start} - ${end}`)
    console.log(i)

    console.log(nums)
    swap(nums, i + 1, end)
    console.log(nums)
    return i + 1
}

const sort = function (nums, start, end) {
    if (start < end) {
        const position = partition(nums, start, end)
        sort(nums, start, position - 1)
        sort(nums, position + 1, end)
    }
}

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i]
    }
    console.log(nums1)
    //nums1.sort()
    sort(nums1, 0, nums1.length - 1)
};

merge(nums1, m, nums2, n)
console.log(nums1)