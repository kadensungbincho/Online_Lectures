package collections.treeset;

import java.util.TreeSet;

public class TreeSetTest {

	public static void main(String[] args) {
		
		TreeSet<String> treeSet = new TreeSet<String>();
		
		treeSet.add("Kaden");
		treeSet.add("Cho");
		treeSet.add("Amazon");
		
		for (String str: treeSet) {
			System.out.println(str);
		}

	}

}
