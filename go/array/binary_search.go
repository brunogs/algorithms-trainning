package main

import "fmt"

func BinarySearch(array []int, target int) int {
	// Write your code here.
	var start, end int
	start = 0
	end = len(array) - 1

	for start <= end {
		half := (start + end) / 2
		fmt.Println(start, end, half)
		if array[half] == target {
			return half
		} else if target > array[half] {
			start = half + 1
		} else {
			end = half - 1
		}
	}
	return -1
}

func main() {
	out := BinarySearch([]int{0, 1, 21, 33, 45, 45, 61, 71, 72, 73}, 33)
	if out != 3 {
		panic("invalid result")
	}
	fmt.Println("very well")
}
