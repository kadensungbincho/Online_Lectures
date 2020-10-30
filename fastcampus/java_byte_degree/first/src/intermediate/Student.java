package intermediate;

public class Student {
	int studentId;
	String studentName;
	String address;
	
	public Student() {}
	
	public Student(int id, String name) {
		studentId = id;
		studentName = name;
		address = null;
	}
	
	public void showStudentInfo() {
		System.out.println(studentName + "," + address);
	}
	
	public String getStudentName() {
		return studentName;
	}
}
