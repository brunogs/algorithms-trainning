
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/*
        3
     /     \
    9       20
          /    \
         15     7
 */
const root = new TreeNode(3,
    new TreeNode(9), new TreeNode(20,
        new TreeNode(15), new TreeNode(7)
    )
)

const countDepth = function (count, root) {
    if (root == null || (root.left == null && root.right == null))
        return count
    return Math.max(countDepth(count + 1, root.left), countDepth(count + 1, root.right))
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root == null)
        return 0
    return countDepth(1, root)
};

console.log(maxDepth(root))