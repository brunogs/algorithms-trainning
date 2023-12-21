package main

import (
	"fmt"
	"strconv"
)

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

func RunLengthEncodingNoStringConcat(str string) string {
	var runes []rune
	var currentLetter rune
	var counter int
	for _, letter := range str {

		if counter == 0 {
			currentLetter = letter
			counter++
		} else if letter == currentLetter && counter < 9 {
			counter++
		} else if letter != currentLetter || counter == 9 {
			runes = append(runes, rune(strconv.Itoa(counter)[0]))
			runes = append(runes, currentLetter)
			currentLetter = letter
			counter = 1
		}
	}
	runes = append(runes, rune(strconv.Itoa(counter)[0]))
	runes = append(runes, currentLetter)
	return string(runes)
}

func main() {
	out := RunLengthEncoding("AAAAAAAAAAAAABBCCCCDD")
	if out != "9A4A2B4C2D" {
		panic("failed")
	}
	fmt.Println("great!!")
}
