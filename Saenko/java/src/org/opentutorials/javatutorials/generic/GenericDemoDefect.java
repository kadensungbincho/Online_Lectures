package org.opentutorials.javatutorials.generic;
class StudentInfo1{
	public int grade;
	StudentInfo1(int grade){this.grade = grade;}
}
class EmployeeInfo1{
	public int rank;
	EmployeeInfo1(int rank){this.rank=rank;}
}
class Person1{
	public Object info;
	Person1 (Object info) {this.info=info;}
}

public class GenericDemoDefect {

	public static void main(String[] args) {
		Person1 p1 = new Person1("부장");
		EmployeeInfo1 ei = (EmployeeInfo1)p1.info;
		System.out.println(ei.rank);
	}

}
