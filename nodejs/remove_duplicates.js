nums = [0,0,1,1,1,2,2,3,3,4]


var removeDuplicates = function(nums) {
    const minimumValue = nums[0];
    const maximumValue = nums[nums.length - 1]

    let currentNumber = minimumValue;
    let currentNumberIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > currentNumber) {
            currentNumber = nums[i];
            const temp = nums[currentNumberIndex + 1];
            nums[currentNumberIndex + 1] = currentNumber;
            nums[i] = temp;
            i = currentNumberIndex + 1
            currentNumberIndex = i
        }
        if (currentNumber === maximumValue) {
            return currentNumberIndex + 1;
        }
    }
};

const result = removeDuplicates(nums)
console.log(`${result} and array now: ${nums}`)