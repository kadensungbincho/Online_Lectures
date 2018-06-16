package org.opentutorials.javatutorials.scope;

public class ScopeDemo2 {
	static int i;
	
	static void a() {
		i = 0;
	}

	public static void main(String[] args) {
		for (i = 0; i < 5; i++) {
			System.out.println(i);
		}
	}

}
