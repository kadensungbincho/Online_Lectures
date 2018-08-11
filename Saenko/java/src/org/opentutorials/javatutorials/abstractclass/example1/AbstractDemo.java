package org.opentutorials.javatutorials.abstractclass.example1;

// abstract enforce inheritance.
abstract class A{
	public abstract int b();
	// 
	public void d() {
		System.out.println("world");
	}
}
class B extends A{
	// b is abstract method. It should be inherited.
	public int b() {
		return 1;
	}`
}
public class AbstractDemo {

	public static void main(String[] args) {
		//A obj = new A();
		B obj = new B();
		obj.b();

	}

}
