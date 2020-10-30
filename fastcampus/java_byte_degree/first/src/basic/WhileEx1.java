package basic;

public class WhileEx1 {

	public static void main(String[] args) {
		int num = 1;
		int sum = 0;
		
		while (num < 10) {
			num++;
			sum += num;
		}
		
		System.out.println(sum);

	}

}
