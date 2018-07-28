package study;

class C {
	int left, right;
	public void setOperands(int left, int right) {
		this.left = left;
		this.right = right;
	}
	
	public void sum() {
		System.out.println(this.left + this.right);
	}
}

class D {
	int left, right;
	
	public D(int left, int right) {
		this.left = left;
		this.right = right;
	}
	
	public void sum() {
		System.out.println(this.left + this.right);
	}
}

public class week4_construtor {

	public static void main(String[] args) {
		C c = new C();
		D d = new D(10, 20);
		
		c.setOperands(10,  20);
		c.sum();
		d.sum();
	}

}
