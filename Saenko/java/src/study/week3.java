package study;

public class week3 {

	public static void main(String[] args) {
		System.out.println(true && false);
		System.out.println(true || false);
		System.out.println(!(true && false));
		int i = 0;
		while (i < 5) {
			System.out.println(++i);
		}
		for(int a = 1; a < 10; a++) {
			if (a == 5) {
				continue;
			}
			if (a == 9) {
				break;
			}
			System.out.println(a);
		}
		String[] goods = {"바나나", "감자", "땅콩", "옥수수", "멜젓"};
		for (int k = 0; k < goods.length; k++) {
			System.out.println(goods[k]);
		}
	}

}
