package intermediate;

public class StudentTest {

	public static void main(String[] args) {
		Student studentLee = new Student();
		studentLee.studentId = 10;
		studentLee.studentName = "Kaden";
		studentLee.address = "Seoul";
		
		studentLee.showStudentInfo();
		
		Student studentKim = new Student();
		studentKim.studentName = "Kim";
		studentKim.address = "Kyungju";
	
		studentKim.showStudentInfo();
	}

}
