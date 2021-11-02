function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const head = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))))
// const head = new ListNode(1, new ListNode(2))


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
    let reversed = reverse(head, new ListNode(head.val))
    while (head != null && reversed != null) {
        if (head.val !== reversed.val)
            return false
        head = head.next
        reversed = reversed.next
    }
    return true
};

console.log(isPalindrome(head))