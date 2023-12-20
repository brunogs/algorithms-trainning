package main

import "fmt"

func BinarySearch(array []int, target int) int {
	// Write your code here.
	var start, end int
	start = 0
	end = len(array) - 1

	fmt.Println(array, target)
	for start < end-1 {
		half := (start + end) / 2

		if array[start] == target {
			return start
		}

		if array[end] == target {
			return end
		}

		if array[half] == target {
			return half
		} else if target > array[half] {
			start = half
		} else {
			end = half
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
