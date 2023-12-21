package main

import "fmt"

var alphabet = "abcdefghijklmnopqrstuvwxyz"

func CaesarCipherEncryptor(str string, key int) string {
	limit := len(alphabet) - 1
	newKey := key % 26

	charIndex := make(map[rune]int)
	for i, char := range alphabet {
		charIndex[char] = i
	}

	strAsChars := []rune(str)
	for i, char := range strAsChars {
		currentIndex := charIndex[char]

		currentIndex += newKey
		if currentIndex <= limit {
			strAsChars[i] = rune(alphabet[currentIndex])
		} else {
			strAsChars[i] = rune(alphabet[currentIndex%26])
		}
	}

	return string(strAsChars)
}

func main() {
	out := CaesarCipherEncryptor("xyz", 2)
	if out != "zab" {
		panic("failed")
	}
	fmt.Println("great!")
}
