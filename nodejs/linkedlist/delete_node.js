function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

const node = new ListNode(4, new ListNode(5, new ListNode(1, new ListNode(9, null))))

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val
    node.next = node.next.next
};

deleteNode(node.next)
console.log(node)