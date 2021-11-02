
function ListNode(val, next = null) {
    this.val = val
    this.next = next
}

const head = new ListNode(3)
const tail = new ListNode(2, new ListNode(0, new ListNode(-4, head)))
head.next = tail

/**
 * Using two pointers (slow and fast) the memory complexity stay in O(1)
 *
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head == null || head.next == null)
        return false
    if (head.next === head)
        return true

    let slower = head
    let faster = head
    faster = faster.next
    while (faster.next && faster.next.next){
        if (faster === slower)
            return true
        faster = faster.next.next
        slower = slower.next
    }
    return false
};

console.log(hasCycle(head))