function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


const left = new TreeNode(9)
const right = new TreeNode(20, new TreeNode(15), new TreeNode(7))
const root = new TreeNode(1, left, right)

/*
Solution found here: https://www.youtube.com/watch?v=XZnWETlZZ14
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = []
    const queue = []
    if (!root)
        return result
    queue.push(root)
    while (queue.length > 0) {
        const size = queue.length
        const currentLevel = []
        for (let i = 0; i < size; i++) {
            const currentNode = queue.shift()
            currentLevel.push(currentNode.val)
            if (currentNode.left != null)
                queue.push(currentNode.left)
            if (currentNode.right != null)
                queue.push(currentNode.right)
        }
        result.push(currentLevel)
    }
    return result
};

console.log(levelOrder(root))