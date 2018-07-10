package org.opentutorials.javatutorials.exception;
import java.io.*;
public class CheckedExceptionDemo {

	public static void main(String[] args) {
		BufferedReader bReader = null;
		String input = null;
		try {
			bReader = new BufferedReader(new FileReader("out.txt"));
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		try {
			input = bReader.readLine();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println(input);
	}

}
