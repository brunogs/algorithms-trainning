function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// const l1 = new ListNode(1, new ListNode(2, new ListNode(4)))
// const l2 = new ListNode(1, new ListNode(3, new ListNode(4)))

const l1 = new ListNode(-9, new ListNode(3))
const l2 = new ListNode(5, new ListNode(7))

const mergeRecursive = function (head, l1, l2) {
    console.log(`received`)
    console.log(l1)
    console.log(l2)
    if (l1 == null && l2 == null)
        return head
    else if (l1 == null) {
        head.next = mergeRecursive(new ListNode(l2.val), l1, l2.next)
        return head
    } else if (l2 == null) {
        head.next = mergeRecursive(new ListNode(l1.val), l1.next, l2)
        return head
    } else {
        if (l1.val < l2.val) {
            head.next = mergeRecursive(new ListNode(l1.val), l1.next, l2)
        } else {
            head.next = mergeRecursive(new ListNode(l2.val), l1, l2.next)
        }
        return head
    }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1)
        return l2
    if (!l2)
        return l1
    let newList
    if (l1.val < l2.val) {
        newList = new ListNode(l1.val)
        l1 = l1.next
    } else {
        newList = new ListNode(l2.val)
        l2 = l2.next
    }
    return mergeRecursive(newList, l1, l2)
};

let result = mergeTwoLists(l1, l2)
console.log(result)
while (result != null) {
    console.log(result.val)
    result = result.next
}