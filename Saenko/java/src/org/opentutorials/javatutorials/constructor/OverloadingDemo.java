package org.opentutorials.javatutorials.constructor;

class Calculator2 {
	int left, right;
	int third = 0;
	
	public void setOperands(int left, int right) {
		System.out.println("setOperands(int left, int right)");
		this.left = left;
		this.right = right;
	}
	
	public void setOperands(int left, int right, int third) {
		this.setOperands(left, right);
		System.out.println("setOperands(int left, int right, int third)");
		this.third = third;
	}
	
	public void sum() {
		System.out.println(this.left+this.right+this.third);
	}
}

public class OverloadingDemo {

	public static void main(String[] args) {
		Calculator2 c2 = new Calculator2();
		c2.setOperands(20, 40);
		c2.sum();
		
		c2.setOperands(30, 50, 60);
		c2.sum();

	}

}
