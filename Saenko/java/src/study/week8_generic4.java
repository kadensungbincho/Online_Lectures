package study;
interface Info{
	int getLevel();
}
class EmployeeInfo4 implements Info{
	public int rank;
	EmployeeInfo4(int rank){ this.rank = rank; }
	public int getLevel() {
		return this.rank;
	}
}
class Person4<T extends Info>{
	public T info;
	Person4(T info){
		this.info = info;
		info.getLevel();
	}
}
public class week8_generic4 {

	public static void main(String[] args) {
		Person4<EmployInfo4> p1 = new Person4<EmployeeInfo4>(new EmployeeInfo4(1));

	}

}
