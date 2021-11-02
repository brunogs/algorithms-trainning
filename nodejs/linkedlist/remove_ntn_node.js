
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
// const n = 2

// const head = new ListNode(1,new ListNode(2))
// const n = 1

// const head = new ListNode(1)
// const n = 1

// const head = new ListNode(1, new ListNode(2))
// const n = 2

const head = new ListNode(1,new ListNode(2,new ListNode(3)))
const n = 3

/**
 * Solution from https://www.youtube.com/watch?v=XtYEEvrhemI
 * Main concepts here: dummy_head, fast, and slow pointers
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy_head = {}
    dummy_head.next = head

    let slow = dummy_head
    let fast = dummy_head

    for (let i = 1; i <= n + 1; i++) {
        fast = fast.next
    }
    while (fast != null) {
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return dummy_head.next
};

console.log(removeNthFromEnd(head, n))