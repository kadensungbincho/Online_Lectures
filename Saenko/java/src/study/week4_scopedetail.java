package study;

class S{
	int v = 22;
	
	void m() {
		int v = 33;
		System.out.println(this.v);
	}
}

public class week4_scopedetail {
	static int i;
	
	static void a() {
		int i = 6;
		b();
		System.out.println(i);
	}
	static void b() {
		i = i + 10;
	}

	public static void main(String[] args) {
		i = 30;
		a();
		System.out.println(i);
		S s1 = new S();
		s1.m();
	}
}
