function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))


const recursiveReverse = function(head, tail) {
    if (head == null) {
        return tail
    }
    return recursiveReverse(head.next, new ListNode(head.val, tail))
}

const iterativelyReverse = function(head) {
    let newHead = new ListNode(head.val)
    while (head != null) {
        head = head.next
        if (head)
            newHead = new ListNode(head.val, newHead)
    }
    return newHead
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head)
        return null
    //return recursiveReverse(head.next, new ListNode(head.val))
    return iterativelyReverse(head)
};

console.log(reverseList(head))