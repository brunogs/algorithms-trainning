function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const nums = [-10,-3,0,5,9]
// const nums = [1,3]

//failure
const buildLeft = function (nums, min, max) {
    if (max - min === 1) {
        const node = new TreeNode(nums[max])
        node.left = new TreeNode(nums[min])
        return node
    }
    const half = Math.floor(max / 2)
    const root = new TreeNode(nums[half])
    root.left = buildLeft(nums, 0, half - 1)
    return root
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) return null
    return constructTreeFromArray(nums, 0, nums.length - 1)
};

const constructTreeFromArray = function (nums, left, right) {
    if (left > right) return null
    const midpoint = Math.floor(left + (right-left) / 2)
    console.log(midpoint)
    const node = new TreeNode(nums[midpoint])
    node.left = constructTreeFromArray(nums, left, midpoint - 1)
    node.right = constructTreeFromArray(nums, midpoint + 1, right)
    return node
}

console.log(sortedArrayToBST(nums))