package main

import "fmt"

func FirstNonRepeatingCharacter(str string) int {
	// Write your code here.
	letters := make(map[rune]int)
	for _, letter := range str {
		letters[letter]++
	}
	// return first non-repeating
	for i, letter := range str {
		if letters[letter] == 1 {
			return i
		}
	}
	return -1
}

func main() {
	out := FirstNonRepeatingCharacter("abcdcaf")
	if out != 1 {
		panic("failed")
	}
	fmt.Println("great")
}
