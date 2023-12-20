package main

import "fmt"

func FindThreeLargestNumbers_(array []int) []int {
	// Write your code here.
	var out []int
	out = append(out, -9999)
	out = append(out, -9999)
	out = append(out, -9999)
	for _, value := range array {

		if value > out[2] {
			out[0] = out[1]
			out[1] = out[2]

			out[2] = value
		} else if value > out[1] {
			out[0] = out[1]
			out[1] = value
		} else if value > out[0] {
			out[0] = value
		}
	}
	return out
}

func FindThreeLargestNumbers(array []int) []int {
	// Write your code here.
	last := findLargest(array, -1)
	middle := findLargest(array, last)
	first := findLargest(array, middle)
	var out []int
	if first != -1 {
		out = append(out, array[first])
	}
	if middle != -1 {
		out = append(out, array[middle])
	}
	if last != -1 {
		out = append(out, array[last])
	}
	return out
}

func findLargest(array []int, currentLargest int) int {
	newLargest := -1
	for i := range array {
		if i == currentLargest || (currentLargest != -1 && array[i] > array[currentLargest]) {
			continue
		}
		if newLargest == -1 || array[i] >= array[newLargest] {
			newLargest = i
		}
	}
	return newLargest
}

func main() {
	numbers := []int{141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7}
	out := FindThreeLargestNumbers(numbers)
	if out[0] != 18 || out[1] != 141 || out[2] != 541 {
		panic("wrong result")
	}
	fmt.Println("very well")
}
