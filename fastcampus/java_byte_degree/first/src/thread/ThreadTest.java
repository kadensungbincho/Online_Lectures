package thread;


class MyRunnable implements Runnable {
	
	@Override
	public void run() {
		int i;
		
		for (i=0; i<=200; i++) {
			System.out.println(i);
			
			try {
				Thread.sleep(100);
			}	catch (InterruptedException e) {
				e.printStackTrace();
			}
			
		}
	}
}

public class ThreadTest {

	public static void main(String[] args) {
		
//		System.out.println();
//		MyRunnable runnable1 = new MyRunnable();
//		Thread thread1 = new Thread(runnable1);
//		
//		MyRunnable runnable2 = new MyRunnable();
//		Thread thread2 = new Thread(runnable2);
//		
//		thread1.start();
//		thread2.start();
		
		Thread t = Thread.currentThread();
		System.out.println(t);
		
		System.out.println();
	}

}
