package string;

import java.util.Scanner;

public class LongestWord {

    public static String longest(String sen) {
        // code goes here
        String longestWord = "";
        String currentWord = "";
        for (int i = 0; i < sen.length(); i++) {
            if (Character.isLetterOrDigit(sen.charAt(i))) {
                currentWord += sen.charAt(i) + "";
            } else {
                if (currentWord.length() > longestWord.length()) {
                    longestWord = currentWord;
                }
                currentWord = "";
            }
        }
        if (currentWord.length() > longestWord.length()) {
            longestWord = currentWord;
        }
        return longestWord;
    }

    public static void main (String[] args) {
        // keep this function call here
        Scanner s = new Scanner(System.in);
        System.out.print(longest(s.nextLine()));
    }

}
