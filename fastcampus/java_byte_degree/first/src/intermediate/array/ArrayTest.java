package intermediate.array;

public class ArrayTest {

	public static void main(String[] args) {
		int[] arr1 = new int[10];
		int[] arr = new int[] {1, 2, 3};
		
		int[] arr2;
		arr2 = new int[] {1, 2, 3};
		
		int[] arr3 = new int[10];
		
		for(int i=0; i<arr3.length; i++) {
			System.out.println(arr3[i]);
		}
		
		
		double[] dArr = new double[5];
		
		dArr[0] = 1.1;
		dArr[1] = 2.1;
		dArr[2] = 3.1;
		
		int total = 1;
		
		for(int i=0; i<dArr.length; i++) {
			total *= dArr[i];
		}
		
		System.out.println(total);

	}

}
