package org.opentutorials.javatutorials.finals;

class Calculator {
	static final double PI = 3.14;
	int left, right;
	
	public void setOprands(int left, int right) {
		this.left = left;
		this.right = right;
		// Calculator.PI = 6; // get error
		// cannot change final PI
	}
	public void sum() {
		System.out.println(this.left+this.right);
	}
	
	public void avg() {
		System.out.println((this.left+this.right) / 2);
	}
}
public class CalculatorDemo1 {

	public static void main(String[] args) {
		Calculator c1 = new Calculator();
		System.out.println(c1.PI);
		// Calculator.PI = 10;
	}

}
