package stream.others;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.RandomAccessFile;

public class RandomAccessFileTest {

	public static void main(String[] args) throws IOException {
		
		RandomAccessFile raf = new RandomAccessFile("random.txt", "rw");
		
		raf.writeInt(100);
		System.out.println(raf.getFilePointer());
		raf.writeDouble(3.14);
		System.out.println(raf.getFilePointer());
		
		raf.seek(0);
		int i = raf.readInt();
		double d = raf.readDouble();
		
		System.out.println(i);
		System.out.println(d);
		
		
	}

}
