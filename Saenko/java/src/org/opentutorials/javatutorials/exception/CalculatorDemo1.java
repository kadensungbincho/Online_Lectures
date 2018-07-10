package org.opentutorials.javatutorials.exception;
class Calculator1{
	int left, right;
	public void setOprands(int left, int right) {
		if(right == 0) {
			throw new IllegalArgumentException("두번쨰 인자는 0을 허용하지 않습니다.");
		}
		this.left = left;
		this.right = right;
	}
	public void divide() {
		try {
			System.out.println("계산결과");
			System.out.println(this.left/this.right);
			System.out.println(" 입니다.");
		} catch(Exception e) {
			System.out.println("\n\ne.getMessage()\n"+e.getMessage());
			System.out.println("\n\ne.toString()\n"+e.toString());
			System.out.println("\n\ne.printStackTrace()");
			e.printStackTrace();
		}
	}
}
public class CalculatorDemo1 {

	public static void main(String[] args) {
		Calculator1 c1 = new Calculator1();
		c1.setOprands(10, 0);
		c1.divide();

	}

}
