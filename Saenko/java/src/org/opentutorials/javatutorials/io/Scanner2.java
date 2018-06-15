package org.opentutorials.javatutorials.io;

import java.util.Scanner;

public class Scanner2 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		while(sc.hasNextInt()) {
			System.out.println(sc.nextInt()*1000);
		}
		sc.close();
	}

}
