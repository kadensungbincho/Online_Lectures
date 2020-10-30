package intermediate;

public class FractionTest {
	public static int addNum(int num1, int num2) {
		int result;
		result = num1 + num2;
		return result;
	}
	
	public static void sayHello(String greetString) {
		System.out.println(greetString);
	}
	
	public static int calcSum() {
		int sum = 0;
		int i;
		
		for (i=0; i<=100; i++) {
			sum += 1;
		}
		
		return sum;
	}
	
	public static void main(String[] args) {
		int n1 = 10;
		int n2 = 20;
		
		int total = addNum(n1, n2);
		
		sayHello("Hi");
	}
}
