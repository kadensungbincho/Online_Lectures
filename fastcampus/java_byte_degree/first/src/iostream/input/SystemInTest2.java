package iostream.input;

import java.io.IOException;
import java.io.InputStreamReader;

public class SystemInTest2 {

	public static void main(String[] args) {
		
		System.out.println("input:");
		
		try {
			int i;
			InputStreamReader isr = new InputStreamReader(System.in);
			while ((i = isr.read()) != '\n') {
				System.out.println(i);
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}

}
