package iostream.input;

import java.io.IOException;

public class SystemInTest {

	public static void main(String[] args) {
		
		System.out.println("input:");
		
		try {
			int i = System.in.read();
			System.out.println(i);
			System.out.println((char)i);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}

}
