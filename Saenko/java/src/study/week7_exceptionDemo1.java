package study;

class M{
	private int[] arr = new int[3];
	M() {
		arr[0] = 0;
		arr[1] = 10;
		arr[2] = 20;
	}
	public void z(int first, int second) {
		System.out.println(arr[first] / arr[second]);
	}
}

public class week7_exceptionDemo1 {

	public static void main(String[] args) {
		M m = new M();
		try {
			m.z(1,  0);
		} catch (Exception e){
			System.out.println(e);
		} finally {
			System.out.println("executed");
		}

	}

}
