package study;

class StudentInfo{
	public int grade;
	StudentInfo(int grade){ this.grade = grade; }
}
class EmployeeInfo{
	public int rank;
	EmployeeInfo(int rank){ this.rank = rank; }
}
class Persons {
	public Object info;
	Persons(Object info){ this.info = info; }
}
public class week8_generic2 {

	public static void main(String[] args) {
		Persons p1 = new Persons("부장");
		EmployeeInfo ei = (EmployeeInfo)p1.info;

	}

}
