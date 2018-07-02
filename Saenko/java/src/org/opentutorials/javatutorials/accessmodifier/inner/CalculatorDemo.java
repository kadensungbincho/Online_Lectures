package org.opentutorials.javatutorials.accessmodifier.inner;

class Calculator{
	private int left, right;
	
	public void setOperands(int left, int right) {
		this.left = left;
		this.right = right;
	}
	private int _sum() {
		return this.left+this.right;
	}
	public void sumDecoPlus() {
		System.out.println("++++"+_sum()+"++++");
	}
	public void sumDecoMinus() {
		System.out.println("----"+_sum()+"----");
	}
}
public class CalculatorDemo {

	public static void main(String[] args) {
		Calculator c1 = new Calculator();
		c1.setOperands(10, 20);
		c1.sumDecoPlus();
		c1.sumDecoMinus();
	}

}
