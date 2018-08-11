package study;

public class week4 {
	static int k;
	static int p;
	
	static void a() {
		int i = 6;
		k = 6;
		int p = 6;
	}

	public static void main(String[] args) {
		for (int i = 0; i < 5; i++) {
			a();
			System.out.println(i);
		}
		for (k = 0; k < 5; k++) {
			a();
			System.out.println(k);
		}
		for (p = 0; p < 5; p++) {
			a();
			System.out.println(p);
		}

	}

}
