package lambda;

public class TestMyMaxNumber {

	public static void main(String[] args) {
		
		MyMaxNumber max = (x, y) -> (x >= y) ? x : y;
		System.out.println(max.getMaxNumber(1, 2));
	}

}
