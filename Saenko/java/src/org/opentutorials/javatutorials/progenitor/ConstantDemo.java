package org.opentutorials.javatutorials.progenitor;

class Fruit {
	public static final Fruit APPLE = new Fruit();
	public static final Fruit PEACH = new Fruit();
	public static final Fruit BANANA = new Fruit();
}

class Company {
	public static final Company GOOGLE = new Company();
	public static final Company APPLE = new Company();
	public static final Company ORACLE = new Company();
}

public class ConstantDemo {
	/*
	public final static int FRUIT_APPLE = 1;
	public final static int FRUIT_PEACH = 2;
	public final static int FRUIT_BANANA = 3;
	
	private final static int COMPANY_GOOGLE = 1;
	private final static int COMPANY_APPLE = 2;
	private final static int COMPANY_ORACLE = 3;
	*/
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*
		if(Fruit.APPLE == Company.APPLE) {
			System.out.println("과일애플과 회사 애플이 같다.");
		}
		*/
		
		
		Fruit type = Fruit.APPLE;
		// switch문의 조건으로 제한된 데이터 타입만 사용가능함.
		/*
		switch(type) {
		case Fruit.APPLE:
			System.out.println(57+" kcal");
		case Fruit.PEACH:
			System.out.println(34+" kcal");
		case Fruit.BANANA:
			System.out.println(90+" kcal");
		}
		*/

	}

}
