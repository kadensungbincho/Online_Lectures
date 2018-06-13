package org.opentutorials.javatutorials.datatype;

public class IntDatatypeDemo {

	public static void main(String[] args) {
		byte b;
		b = 127;
		short a = 128;
		System.out.println(a);
		int c = 3;
		float d = 1.0F;
		double e = c + d;
		System.out.println(e);
		
		// explicit conversion
		float k = (float)100.0;
		int l = (int)100.0F;
		System.out.println(l);
	}

}
