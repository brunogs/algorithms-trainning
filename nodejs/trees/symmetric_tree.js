function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const left = new TreeNode(2, new TreeNode(3), new TreeNode(4))
const right = new TreeNode(2, new TreeNode(4), new TreeNode(3))
const root = new TreeNode(1, left, right)

const compare = function (root1, root2) {
    if (root1 == null && root2 == null) return true
    if (root1 == null || root2 == null) return false
    console.log(`comparing root1 ${root1.val} with root2 ${root2.val}`)
    return (root1.val === root2.val) && compare(root1.left, root2.right) && compare(root1.right, root2.left)
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return compare(root, root)
};

console.log(isSymmetric(root))