 const nums = [2,2,1]
//const nums = [4,1,2,1,2]
// const nums = [1]

 /**
  * @param {number[]} nums
  * @return {number}
  */
 var singleNumber = function(nums) {
     nums.sort()
     let wrongNumber;
     for (let i = 0; i < nums.length; i++) {
         if (i === nums.length - 1)
             return nums[i]
         else if (nums[i] === nums[i + 1])
             wrongNumber = nums[i]
         else if (nums[i] !== wrongNumber)
             return nums[i]
     }
 };

console.log(singleNumber(nums))