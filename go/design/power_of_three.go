package main

import (
	"fmt"
)

func isPowerOfThree(n int) bool {
	if n == 1 {
		return true
	}
	for n > 1 {
		if n%3 != 0 {
			return false
		}
		n = n / 3
		if n == 1 {
			return true
		}
	}
	return false
}

func main() {
	//fmt.Println(isPowerOfThree(9))
	//fmt.Println(isPowerOfThree(27))
	//fmt.Println(isPowerOfThree(0))
	fmt.Println(isPowerOfThree(45))
}
