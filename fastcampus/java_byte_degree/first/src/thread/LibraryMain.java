package thread;

import java.util.ArrayList;

class FastLibrary {
	
	public ArrayList<String> books = new ArrayList<String>();
	
	public FastLibrary() {
		books.add("new1");
		books.add("new2");
		books.add("new3");
		books.add("new4");
	}
	
	public synchronized String lendBook() throws InterruptedException {
		
		Thread t = Thread.currentThread();
		
		while (books.size() == 0) {
			System.out.println(t.getName() + " waiting start");
			wait();
			System.out.println(t.getName() + " waiting end");
		}
		
		String title = books.remove(0);
		System.out.println(t.getName() + ":" + title + " lend");
		return title;
	}
	
	public synchronized void returnBook(String title) {
		Thread t = Thread.currentThread();
		books.add(title);
		notifyAll();
		System.out.println(t.getName() + ":" + title + " return");
	}
}

class Student extends Thread {
	
	public void run() {
		
		try{
			String title = LibraryMain.library.lendBook();

			sleep(5000);
			LibraryMain.library.returnBook(title);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
}

public class LibraryMain {
	
	public static FastLibrary library = new FastLibrary();
	
	public static void main(String[] args) {
		
		Student student1 = new Student();
		Student student2 = new Student();
		Student student3 = new Student();
		Student student4 = new Student();
		Student student5 = new Student();
		Student student6 = new Student();
		
		student1.start();
		student2.start();
		student3.start();
		student4.start();
		student5.start();
		student6.start();
	}

}
