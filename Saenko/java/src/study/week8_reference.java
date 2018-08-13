package study;

class AK{
	public int id;
	AK(int id) {
		this.id = id;
	}
}

public class week8_reference {
	public static void runValue() {
		int a = 1;
		int b = a;
		b = 2;
		System.out.println("runValue, "+a);
	}
	
	public static void runReference1() {
		AK a = new AK(1);
		AK b = a;
		b.id = 2;
		System.out.println("runReference, "+a.id);
	}
	
	static void _reference2(AK b) {
		b.id = 2;
	}
	
	static void runReference2() {
		AK a = new AK(1);
		_reference2(a);
		System.out.println("runReference2, "+a.id);
	}
	
	public static void main(String[] args) {
		runValue();
		runReference1();
		runReference2();
	}
}
