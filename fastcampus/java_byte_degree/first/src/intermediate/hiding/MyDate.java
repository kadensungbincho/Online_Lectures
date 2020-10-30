package intermediate.hiding;

public class MyDate {
	
	private int day;
	private int month;
	private int year;
	
	public void setDay(int day) {
		this.day = day;
	}
	
	public int getDay() {
		return day;
	}
	
	public void showDate() {
		System.out.println(year + "년 " + month + "월 " + day + "일 입니다.");
	}

	public int getMonth() {
		return month;
	}

	public void setMonth(int month) {
		this.month = month;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}
	
	
}
