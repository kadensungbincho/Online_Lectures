package study;

public class week2_20180708 {

	public static void main(String[] args) {
		// 문제 3번.
		// System.out.println("앱개발");
		/* 
		System.our.println("시작");
		 */
		String name = "안드로이드";
		String classDetail = "기초반";
		System.out.println(name+classDetail);
		int a = 5;
		float b = 11.0F;
		double c = a + b;
		int d = (int)c;
		int e = 20;
		int f = 3;
		double g = 3.0;
		System.out.println(c);
		System.out.println(d);
		System.out.println(d%5);
		System.out.println(e/f);
		//아래의 경우 소숫점 2자리까지 맞으면 정담.
		System.out.println(e/g);
		System.out.println(++f);
		System.out.println(f++);
		System.out.println(++f);

		// 문제 4번.
        String answer = "kadencho";
        if (name.equals(answer)){
            System.out.println(name);
        } else {
            System.out.println("wrong");
        }
	}

}
