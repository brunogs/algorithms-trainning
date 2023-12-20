package main

import "fmt"

type tstNode struct {
	value int
	next  *tstNode
}

func main() {

	node := &tstNode{
		value: 1,
		next: &tstNode{
			value: 2,
			next: &tstNode{
				value: 3,
				next:  &tstNode{value: 4},
			},
		},
	}

	print(node)

	fmt.Println("ok")
	print(reverseTst(node.next, &tstNode{value: node.value, next: nil}))

}

func reverseTst(head *tstNode, tail *tstNode) *tstNode {
	if head == nil {
		return tail
	}
	return reverseTst(head.next, &tstNode{value: head.value, next: tail})
}

func print(n *tstNode) {
	cur := n
	for cur != nil {
		fmt.Print(cur.value, "->")
		cur = cur.next
	}
}
