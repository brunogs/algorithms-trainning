
function DoublyLinkedListNode(data) {
    this.data = data
}

const head = new DoublyLinkedListNode(1)
const nodeThree = new DoublyLinkedListNode(3)
const nodeFour = new DoublyLinkedListNode(4)
const nodeTen = new DoublyLinkedListNode(10)

head.prev = null
head.next = nodeThree
nodeThree.prev = head
nodeThree.next = nodeFour
nodeFour.prev = nodeThree
nodeFour.next = nodeTen
nodeTen.prev = nodeFour
nodeTen.next = null

const data = 5

function sortedInsert(llist, data) {
    // Write your code here
    const newNode = new DoublyLinkedListNode()
    newNode.data = data

    if (!llist)
        return newNode
    if (llist.data > data) {
        newNode.next = llist
        return newNode
    }

    const dummyHead = { next: llist }
    let slow = dummyHead

    while (llist != null && (llist.next != null && llist.next.data < data)) {
        llist = llist.next
        slow = slow.next
    }

    if (llist) {
        newNode.prev = llist
        newNode.next = llist.next
        llist.next = newNode
    } else {
        newNode.prev = slow
        slow.next = newNode
    }
    return dummyHead.next
}

console.log(sortedInsert(head, data))