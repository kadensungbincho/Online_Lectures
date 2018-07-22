package study;

class AortaCalculator {
	int left, center, right;
	String name;
	
	public void setVars(int left, int center, int right, String name) {
		this.left = left;
		this.center = center;
		this.right = right;
		this.name = name;
	}
}
public class week3_test {

	public static void main(String[] args) {
		/*
		System.out.println("애오타 스터디 입니다");
		*/
		int a = 10;
		float b = 10.0F; 
		float c = a - (b + 2) * 3 / 2;
		b = (int)b;
		System.out.println(a==b);
		System.out.println(c);
		for(int i = 2; i < a; i++) {
			if (i % 2 == 0) {
				if (i % 3 == 0) {
					continue;
				}
				System.out.println(++i);
			}
			else {
				System.out.println("이것은"+ i++);
			}
		}
		
		String[] names = {"이정호", "조종완", "장성우", "조성빈"};
		// System.out.println(names[0].substring(0`, 1));
		// 위 문자을 실행하면 첫 번째 원소의 첫 번째 글자인 '이'가 출력됨.
		for (String name: names) {
			if (name.substring(0, 1).equals("조")) {
				switch(name.substring(1, 2)) {
					case("종"):
						System.out.println("첫 번째 사람 "+name);
						break;
					case("성"):
						System.out.println("두 번째 사람 "+name);
				}				
			} else {
				switch(name.substring(1,2)) {
					case("성"):
						System.out.println("세 번째 사람 "+name);
				}
			}
		}

	}

}
