package assignment;
import java.util.Scanner;

public class PangramCheck {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine().toLowerCase(); // Convert to lowercase for case-insensitivity
        boolean isPangram = checkPangram(input);
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
        scanner.close();
	}
	public static boolean checkPangram(String input) {
        boolean[] alphabet = new boolean[26]; // 26 letters in the English alphabet
        int count = 0;

        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);
            if (c >= 'a' && c <= 'z') {
                int index = c - 'a'; // Convert character to array index (0-25)
                if (!alphabet[index]) {
                    alphabet[index] = true;
                    count++;
                }
            }
        }

        // Check if all alphabet letters are present
        return count == 26;
    }

}
