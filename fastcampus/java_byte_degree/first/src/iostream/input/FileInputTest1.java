package iostream.input;

import java.io.FileInputStream;
import java.io.IOException;

public class FileInputTest1 {

	public static void main(String[] args) {
	
		try (FileInputStream fis = new FileInputStream("input.txt")) {
			int i;
			byte[] bs = new byte[20];
			while ((i = fis.read(bs)) != -1) {
//				for(byte b: bs) {
//					System.out.print((char)b);
//				}
				for(int k=0; k<i; k++) {
					System.out.print((char)bs[k]);
				}
			}
			System.out.println();
		} catch (IOException e) {
			
			e.printStackTrace();
		}  catch (Exception e) {
			e.printStackTrace();
		}
	}

}
