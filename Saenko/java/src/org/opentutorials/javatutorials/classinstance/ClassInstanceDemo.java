package org.opentutorials.javatutorials.classinstance;

class C1{
	static int static_variable = 1;
	int instance_variable = 2;
	static void static_static() {
		System.out.println(static_variable);
	}
	static void static_instance() {
		// Class Method cannot access instance variable.
		// System.out.println(instance_variable);
	}
	void instance_static() {
		// Instance Method can access class variable.
		System.out.println(static_variable);
	}
	void instance_instance() {
		System.out.println(instance_variable);
	}
}


public class ClassInstanceDemo {

	public static void main(String[] args) {
		C1 c = new C1();
		c.static_static();
		c.static_instance();
		c.instance_static();
		c.instance_instance();
	}

}
