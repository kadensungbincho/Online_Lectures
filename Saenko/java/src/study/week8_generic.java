package study;

class Person<T>{
	public T info;
}

public class week8_generic {

	public static void main(String[] args) {
		Person<String> p1 = new Person<String>();
		Person<StringBuilder> p2 = new Person<StringBuilder>();
	}
}
