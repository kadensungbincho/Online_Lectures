public class ThreeSixNineGame {

    public static void main(String[] args) {
        for(int i=1; i <=100; i++) {
        	int firstNum = (int)((i % 100) / 10);
            int secondNum = i % 10;
            
            boolean isFirstNum369 = firstNum != 0 & firstNum % 3 == 0;
            boolean isSecondNum369 = secondNum != 0 & secondNum % 3 == 0;

            boolean isDouble369 = isFirstNum369 & isSecondNum369;
            boolean isSingle369 = isFirstNum369 | isSecondNum369;

            if (isDouble369) {
            	System.out.println("**");
            }
            else if (isSingle369) {
            	System.out.println("*");
            }
            else {
            	System.out.println(i);
            }
        }
    }
}
