package main

import (
	"fmt"
	"sort"
)

func removeElementTwoPointer(nums []int, val int) int {
	start := 0
	end := len(nums) - 1
	valueFounds := 0
	for start <= end {
		if nums[start] == val {
			if nums[end] != val {
				//swipe
				nums[start], nums[end] = nums[end], nums[start]
				start++
				end--
			} else {
				end--
			}
			valueFounds++
		} else {
			start++
		}
	}
	fmt.Println(valueFounds)
	return len(nums) - valueFounds
}

func main() {
	nums := []int{0, 1, 2, 2, 3, 0, 4, 2}
	val := 2

	expected := []int{0, 0, 1, 3, 4}

	k := removeElementTwoPointer(nums, val)
	fmt.Println(k, nums)

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
