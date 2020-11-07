package iostream.input;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class FileInputTest3 {

	public static void main(String[] args) {
		FileInputStream fis = null;
		try {
			fis = new FileInputStream("input.txt");
			int i;
			while ((i=fis.read()) != -1) {
				System.out.print((char)i);
			}
			System.out.println();
		} catch (IOException e) {
			
			e.printStackTrace();
		} finally {
			try {
				fis.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		System.out.println("End");
		
		
	}

}
