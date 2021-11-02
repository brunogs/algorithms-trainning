function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const head = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))))
// const head = new ListNode(1, new ListNode(2))


const endOfFirstHalf = function(head) {
    let fast = head
    let slow = head
    while (fast.next != null && fast.next.next != null) {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
}

const reverse = function (head, tail) {
    if (!head) {
        return tail
    } else {
        return reverse(head.next, new ListNode(head.val, tail))
    }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

    let firstHalfEnd = endOfFirstHalf(head)
    let secondHalfStart = reverse(firstHalfEnd.next)

    let p1 = head
    let p2 = secondHalfStart
    let result = true
    while (result && p2 != null) {
        if (p1.val !== p2.val)
            result = false
        p1 = p1.next
        p2 = p2.next
    }
    // Restore the list and return the result.
    firstHalfEnd.next = reverse(secondHalfStart)
    return result;
};

console.log(isPalindrome(head))