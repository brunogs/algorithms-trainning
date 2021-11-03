
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const isValidNode = function (root, low, high) {
    if (root == null)
        return true
    if ((low != null && root.val <= low) || (high != null && root.val >= high)) {
        return false;
    }
    return isValidNode(root.right, root.val, high) && isValidNode(root.left, low, root.val);
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return isValidNode(root, null, null)
};