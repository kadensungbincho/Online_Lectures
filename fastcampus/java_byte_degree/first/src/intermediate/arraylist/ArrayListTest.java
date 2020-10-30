package intermediate.arraylist;

import java.util.ArrayList;

public class ArrayListTest {

	public static void main(String[] args) {
		
		ArrayList<String> list = new ArrayList<>();
		list.add("Kaden Cho");
		
		for (int i=0; i<list.size(); i++) {
			String str = list.get(i);
			System.out.println(str);
		}
		
		

	}

}
