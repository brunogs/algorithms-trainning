// const nums = [2,7,9,3,1]
// const nums = [1,2,3,1]
// const nums = [1,2]
const nums = [1,3,1]
// const nums = [2,1,1,2]

const instaneBotomupSolution = function(nums) {
    let inc = nums[0];
    let exc = 0
    for (let i = 1; i < nums.length; i++) {
        console.log(`inc=${inc} exc=${exc}`)
        const newinc = exc + nums[i]
        const newexc = Math.max(inc, exc)
        console.log(`newinc=${newinc} newexc=${newexc}`)
        inc = newinc
        exc = newexc
    }
    return Math.max(inc,exc);
};

const memo = new Map()
const recursive = function (nums, house) {
    if (house < 0) return 0
    if (memo.has(house)) return memo.get(house)

    const minus1Value = recursive(nums, house - 1)
    const currentHouse = nums[house]
    const minus2Value = recursive(nums, house - 2)

    console.log(`currentHousePosition=${house} currentHouseValue=${currentHouse} minus1Value=${minus1Value} minus2Value=${minus2Value}`)
    memo.set(house, Math.max(minus1Value, currentHouse + minus2Value))

    return memo.get(house)
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //https://www.youtube.com/watch?v=ZwDDLAeeBM0

    if (nums.length === 0) return 0
    let dp = []
    dp[0] = 0
    dp[1] = nums[0]

    for (let i = 1; i < nums.length; i++) {
        const previousHouse = dp[i]
        const previousMaxValue = dp[i - 1]
        dp[i + 1] = Math.max(previousHouse, previousMaxValue + nums[i])
    }

    return dp[nums.length]
};

console.log(rob(nums))