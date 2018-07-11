package org.opentutorials.javatutorials.constant2;

/*
class Fruit {
	public static final Fruit APPLE = new Fruit();
	public static final Fruit PEACH = new Fruit();
	public static final Fruit BANANA = new Fruit();
}
*/

enum Fruit{
	APPLE("red"), PEACH("pink"), BANANA("yellow");
	public String color;
	Fruit(String color){
		System.out.println("Call Constructor"+this);
		this.color = color;
	}
}

enum Company{
	GOOGLE, APPLE, ORACLE;
	/*
	public static final Company GOOGLE = new Company();
	public static final Company APPLE = new Company();
	public static final Company ORACLE = new Company();
	*/
}

public class ConstantDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Fruit type = Fruit.APPLE;
		switch(type) {
			case APPLE:
				System.out.println("A");
			case PEACH:
				System.out.println("B");
			case BANANA:
				System.out.println("C");
		}
	}

}
