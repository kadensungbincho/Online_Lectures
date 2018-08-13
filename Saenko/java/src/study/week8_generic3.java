package study;
class EmployeeInfo3{
	public int rank;
	EmployeeInfo3(int rank){ this.rank = rank; }
}
class Person3<T, S>{
	public T info;
	public S id;
	Person3(T info, S id){ 
		this.info = info; 
		this.id = id;
	}
}
public class week8_generic3 {

	public static void main(String[] args) {
		Integer id = new Integer(1);
		Person3<EmployeeInfo3, Integer> p1 = new Person3<EmployeeInfo3, Integer>(new EmployeeInfo3(1), 1);
		System.out.println(p1.id.intValue());
	}

}
