package study;

class Calculator{
	int left, right;
	public void setOperands(int left, int right) {
		this.left = left;
		this.right = right;
	}
	public void divide() {
		try {
			System.out.println("계산결과는 ");
			System.out.println(this.left/this.right);
			System.out.println(" 입니다");
		} catch (Exception e) {
			try {
				System.out.println(this.left/++this.right);
			} catch (Exception e1) {
				System.out.println("에러가 났습니다");
			}
		}
		System.out.println("실패 후 에러처");
	}
}
public class week7 {

	public static void main(String[] args) {
		Calculator c = new Calculator();
		c.setOperands(10, 0);
		c.divide();
	}
}
