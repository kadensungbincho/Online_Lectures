package study;

class A1 {
	public String x() {
		return "A.x";
	}
}

class B1 extends A1 {
	public String x() {
		return "B.x";
	}
}
public class week6_test {

	public static void main(String[] args) {
		A1 a = new B1();
		System.out.println(a.x());

	}

}
