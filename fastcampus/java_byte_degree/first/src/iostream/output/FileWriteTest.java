package iostream.output;

import java.io.FileWriter;
import java.io.IOException;

public class FileWriteTest {

	public static void main(String[] args) throws IOException {
		
		FileWriter fw = new FileWriter("writer.txt");
		fw.write('A');
		char[] buffer = {'B', 'C'};
		
		fw.write(buffer);
	}

}
