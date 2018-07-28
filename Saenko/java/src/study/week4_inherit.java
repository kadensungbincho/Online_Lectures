package study;

class E {
	int a = 10;
}

class F extends E {
	public void set() {
		this.a = this.a + 20;
	}
}

public class week4_inherit {

	public static void main(String[] args) {
		F f = new F();
		System.out.println(f.a);
	}

}
