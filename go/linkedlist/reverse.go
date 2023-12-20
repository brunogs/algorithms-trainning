package main

import "fmt"

type node struct {
	val  string
	next *node
}

func main() {

	head := node{
		"A",
		&node{
			"B", &node{"C", nil},
		},
	}
	printList(&head)

	fmt.Println("---")
	printList(reverse(head.next, &node{head.val, nil}))

}

func reverse(head *node, tail *node) *node {
	if head == nil {
		return tail
	} else {
		return reverse(head.next, &node{head.val, tail})
	}
}

func printList(l *node) {
	n := l
	for n != nil {
		fmt.Print(n.val, " -> ")
		n = n.next
	}
}
