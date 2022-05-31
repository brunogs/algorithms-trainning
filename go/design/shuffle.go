package main

import (
	"fmt"
	"math/rand"
	"time"
)

type Solution struct {
	nums []int
}

func Constructor(nums []int) Solution {
	return Solution{
		nums: nums,
	}
}

func (this *Solution) Reset() []int {
	rand.Seed(time.Now().UnixNano())
	return this.nums
}

func (this *Solution) Shuffle() []int {
	aux := make([]int, len(this.nums))
	copy(aux, this.nums)
	copyToShuffle := make([]int, len(this.nums))

	for i := 0; i < len(copyToShuffle); i++ {
		randIndex := rand.Intn(len(aux))
		copyToShuffle[i] = aux[randIndex]
		aux = append(aux[:randIndex], aux[randIndex+1:]...)
	}

	return copyToShuffle
}

func main() {
	s := Constructor([]int{1, 2, 3})
	fmt.Println(s.Shuffle())
	fmt.Println(s.Reset())
	fmt.Println(s.Shuffle())
}
