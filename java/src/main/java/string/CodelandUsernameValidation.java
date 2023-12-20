package string;

import java.util.*;
import java.io.*;

class CodelandUsernameValidation {

    public static String validation(String str) {
        // code goes here
        if (str.length() < 4 || str.length() > 25) {
            return "false";
        }
        if (str.matches("[^a-bA-B0-9_]")) {
            System.out.println("invalid character");
            return "false";
        }
        if ((str.charAt(0) + "").matches("[0-9_]")) {
            System.out.println("first non text");
            return "false";
        }
        if (str.charAt(str.length() - 1) == '_') {
            System.out.println("ends with _");
            return "false";
        }
        return "true";
    }

    public static void main (String[] args) {
        // keep this function call here
        Scanner s = new Scanner(System.in);
        System.out.print(validation(s.nextLine()));
    }

}