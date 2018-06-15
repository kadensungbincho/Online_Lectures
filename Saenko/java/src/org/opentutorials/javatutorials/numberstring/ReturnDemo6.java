package org.opentutorials.javatutorials.numberstring;

public class ReturnDemo6 {
	public static String getMember1() {
		return "kadencho";
	}
	
	public static String getMember2() {
		return "kadensungbincho";
	}
	
	public static String[] getMembers() {
		String[] members = {"kadencho", "jiaeSong"};
		return members;
	}
	
	public static void main(String[] args) {
		System.out.println(getMember2());
		String[] members = getMembers();
		for (String m: members) {
			System.out.println(m);
		}
	}

}
