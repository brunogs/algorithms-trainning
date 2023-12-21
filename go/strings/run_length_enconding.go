package main

import "fmt"

func RunLengthEncoding(str string) string {
	enconded := ""
	var currentLetter rune
	var counter int
	for _, letter := range str {

		if counter == 0 {
			currentLetter = letter
			counter++
		} else if letter == currentLetter && counter < 9 {
			counter++
		} else if letter != currentLetter || counter == 9 {
			enconded += encondeLetter(currentLetter, counter)
			currentLetter = letter
			counter = 1
		}
	}
	enconded += encondeLetter(currentLetter, counter)
	return enconded
}

func encondeLetter(letter rune, counter int) string {
	return fmt.Sprintf("%d%s", counter, string(letter))
}

func main() {
	out := RunLengthEncoding("AAAAAAAAAAAAABBCCCCDD")
	if out != "9A4A2B4C2D" {
		panic("failed")
	}
	fmt.Println("great!!")
}
