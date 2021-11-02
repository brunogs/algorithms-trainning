function SinglyLinkedListNode(data, next = null) {
    this.data = data
    this.next = next
}

const head = new SinglyLinkedListNode(3, new SinglyLinkedListNode(13, new SinglyLinkedListNode(7)))
const data = 1
const position = 2


function insertNodeAtPosition(llist, data, position) {
    let dummy_head = { next: llist }
    let slow = dummy_head
    let fast = llist

    for (let i = 1; i <= position; i++) {
        slow = slow.next
        fast = fast.next
    }
    console.log(slow)
    console.log(fast)
    const newNode = new SinglyLinkedListNode()
    newNode.data = data
    newNode.next = fast
    slow.next = newNode
    return dummy_head.next
}

console.log(head)
console.log(insertNodeAtPosition(head, data, position))