package intermediate.staticex;

public class Student {
	
	public static int serialNum = 100;
	private int studentId;
	String studentName;
	String address;
	
	public Student() {}
	
	public Student(String name) {
		studentName = name;
		serialNum++;
	}
	
	public Student(int id, String name) {
		studentId = id;
		studentName = name;
		address = "No address";
		serialNum++;
	}
	
	public void showStudentInfo() {
		System.out.println(studentName + "," + address);
	}
	
	public String getStudentName() {
		return studentName;
	}

	public int getStudentId() {
		return studentId;
	}

	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}
	
	
}
