
function ListNode(val, next = null) {
    this.val = val
    this.next = next
}

const head = new ListNode(3)
const tail = new ListNode(2, new ListNode(0, new ListNode(-4, head)))
head.next = tail

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const past = new Map()
    let foundCycle = false
    while (head != null && !foundCycle) {
        const found = past.get(head.next)
        if (found != null) {
            foundCycle = true
            break
        } else {
            past.set(head, head.val)
            head = head.next
        }
    }
    return foundCycle
};

console.log(hasCycle(head))