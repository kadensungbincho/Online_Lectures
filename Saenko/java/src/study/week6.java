package study;

class A{
	public String y() {
		return "public void y()";
	}
	
	private String x() {
		return "private void x()";
	}
	
	public String z() {
		return x();
	}
	
	protected String a() {
		return "protected void a()";
	}
}

public class week6 {

	public static void main(String[] args) {
		A a = new A();
		// System.out.println(a.y()); (1)
		// System.out.println(a.x()); (2)
		// System.out.println(a.z()); (3)
		// System.out.println(a.a()); (4)

	}

}
