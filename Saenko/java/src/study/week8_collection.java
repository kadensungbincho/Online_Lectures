package study;

import java.util.ArrayList;

public class week8_collection {

	public static void main(String[] args) {
		String[] arrayObj = new String[2];
		arrayObj[0] = "one";
		arrayObj[1] = "two";
		for(int i=0; i<arrayObj.length; i++) {
			System.out.println(arrayObj[i]);
		}
		
		ArrayList al = new ArrayList();
		al.add("one");
		al.add("two");
		al.add("three");
		for(int i=0; i<al.size(); i++) {
			// ArrayList's elements have Object type
			// String value = al.get(i);
			String value = (String)al.get(i);
			System.out.println(value);
			System.out.println(al.get(i));
		}
		
		ArrayList<String> al1 = new ArrayList<String>();
		al1.add("one");
		al1.add("two");
		al1.add("three");
		for(int i=0; i<al1.size(); i++) {
			// ArrayList's elements have Object type
			// String value = al.get(i);
			String value1 = (String)al1.get(i);
			System.out.println(value1);
			System.out.println(al1.get(i));
		}
	}

}
