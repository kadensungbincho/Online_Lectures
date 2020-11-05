package innerclass;

class Outer1 {
	
	int outNum = 100;
	static int sNum = 200;
	
	Runnable getRunnable(int i) {
		
		int num = 100;
		return new Runnable() {
			
			@Override
			public void run() {
				
//				num += 10;
//				i = 200;
				System.out.println(i);
				System.out.println(num);
				
				System.out.println(outNum);
				System.out.println(Outer.sNum);
			}
		};
	}
}

public class AnonymousClass {

	public static void main(String[] args) {
		
		Outer1 outer = new Outer1();
		Runnable runnable = outer.getRunnable(50);
		
		runnable.run();
	}

}
