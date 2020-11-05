package stream;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

public class ArrayListStreamTest {

	public static void main(String[] args) {

		List<String> sList = new ArrayList<String>();
		sList.add("Tomas");
		sList.add("Jack");
		sList.add("Cho");
		
		Stream<String> stream = sList.stream();
		stream.forEach(s -> System.out.println(s));
		System.out.println();
		
		sList.parallelStream().sorted().forEach(s -> System.out.println(s));
	}

}
