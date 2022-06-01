package main

import "fmt"

type Node struct {
	value int
	next  *Node
}

func (n *Node) insert(val int) *Node {
	if n.value < val {
		if n.next == nil {
			n.next = &Node{value: val}
		} else {
			n.next = n.next.insert(val)
		}
		return n
	} else {
		return &Node{
			value: val,
			next:  n,
		}
	}
}

func (n *Node) removeNode(val int) *Node {
	if n.value == val {
		return n.next
	} else {
		n.next = n.next.removeNode(val)
		return n
	}
}

type MinStack struct {
	elements       []int
	sortedElements *Node
}

func (m *MinStack) insertSorted(val int) {
	if m.sortedElements == nil {
		m.sortedElements = &Node{value: val}
	} else {
		m.sortedElements = m.sortedElements.insert(val)
	}
}

func (m *MinStack) remove(val int) {
	if m.sortedElements == nil {
		return
	}
	m.sortedElements = m.sortedElements.removeNode(val)
}

func MinStackConstructor() MinStack {
	return MinStack{
		elements: make([]int, 10),
	}
}

func (this *MinStack) Push(val int) {
	this.elements = append(this.elements, val)
	this.insertSorted(val)
}

func (this *MinStack) Pop() {
	last := this.Top()
	this.elements = this.elements[:len(this.elements)-1]
	this.remove(last)
}

func (this *MinStack) Top() int {
	return this.elements[len(this.elements)-1]
}

func (this *MinStack) GetMin() int {
	return this.sortedElements.value
}

func main() {
	s := MinStackConstructor()

	s.Push(-2)
	s.Push(0)
	s.Push(-1)

	fmt.Println(s.GetMin())

	s.Pop()

	fmt.Println(s.GetMin())

	head := s.sortedElements
	for head != nil {
		fmt.Println(head.value)
		head = head.next
	}

	fmt.Println(s.Top())
	fmt.Println(s.GetMin())
}
