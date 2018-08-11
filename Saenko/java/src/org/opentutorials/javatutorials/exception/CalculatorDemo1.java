package org.opentutorials.javatutorials.exception;
class DivideException extends Exception{
	public int left;
	public int right;
	DivideException(){
		super();
	}
	DivideException(String message){
		super(message);
	}
	DivideException(String message, int left, int right){
		super(message);
		this.left = left;
		this.right = right;
	}
}
class Calculator1{
	int left, right;
	public void setOprands(int left, int right) {
		this.left = left;
		this.right = right;
	}
	public void divide() {
		if(right == 0) {
			try {
				throw new DivideException("Can't divide with 0", this.left, this.right);
			} catch (DivideException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		System.out.println(this.left/this.right);
	}
}
public class CalculatorDemo1 {

	public static void main(String[] args) {
		Calculator1 c1 = new Calculator1();
		c1.setOprands(10, 0);
		c1.divide();

	}

}
