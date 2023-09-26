package main

import (
	"fmt"
	"sort"
)

func removeElement(nums []int, val int) int {
	lastIdx := len(nums) - 1
	diffValues := 0
	for i := 0; i < len(nums); i++ {
		if nums[i] != val {
			diffValues++
		}
		if nums[i] == val && i != lastIdx {
			current := nums[i]

			for j := i + 1; j < len(nums); j++ {
				next := nums[j]
				if next != val {
					nums[i] = next
					nums[j] = current
					break
				}
			}
			if nums[i] != val {
				diffValues++
			}
		}
	}
	return diffValues
}

func main() {
	nums := []int{0, 1, 2, 2, 3, 0, 4, 2}
	val := 2

	expected := []int{0, 0, 1, 3, 4}

	k := removeElement(nums, val)

	if k != len(expected) {
		panic("invalid len")
	}
	slice := nums[:k]
	sort.Ints(slice)
	for i, v := range expected {
		if slice[i] != v {
			fmt.Println(slice)
			fmt.Println(expected)
			panic("result invalid")
		}
	}
}
