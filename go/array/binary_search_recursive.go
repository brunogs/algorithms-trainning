package main

import "fmt"

func BinarySearchRecursive(array []int, target, left, right int) int {
	// Write your code here.
	if array[left] == target {
		return left
	}
	if array[right] == target {
		return right
	}
	if left >= right-1 {
		return -1
	}
	half := (left + right) / 2
	if array[half] == target {
		return half
	} else if target > array[half] {
		return BinarySearchRecursive(array, target, half, right)
	} else if target < array[half] {
		return BinarySearchRecursive(array, target, left, half)
	}
	return -1
}

func main() {
	array := []int{0, 1, 21, 33, 45, 45, 61, 71, 72, 73}
	out := BinarySearchRecursive(array, 33, 0, len(array)-1)
	if out != 3 {
		panic("invalid result")
	}
	fmt.Println("very well")
}
