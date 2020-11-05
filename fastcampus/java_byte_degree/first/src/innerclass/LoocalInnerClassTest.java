package innerclass;

class Outer {
	
	int outNum = 100;
	static int sNum = 200;
	
	Runnable getRunnable(int i) {
		
		int num = 100;
		class MyRunnable implements Runnable {
			
			@Override
			public void run() {
				
//				num += 10;
//				i = 200;
				System.out.println(i);
				System.out.println(num);
				
				System.out.println(outNum);
				System.out.println(Outer.sNum);
			}
		}
		
		return new MyRunnable();
	}
}

public class LoocalInnerClassTest {

	public static void main(String[] args) {
		
		Outer outer = new Outer();
		Runnable runnable = outer.getRunnable(50);
		
		runnable.run();
	}

}
