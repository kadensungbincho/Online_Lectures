package intermediate.cooperation;

public class CoopTest {

	public static void main(String[] args) {
		Student student1 = new Student("James", 5000);
		
		Bus bus100 = new Bus(100);
		Subway subwayGreen = new Subway(2);
		
		student1.takeBus(bus100);
		student1.takeSubway(subwayGreen);
		
		student1.showInfo();
		
		bus100.showBusInfo();
		subwayGreen.showSubwayInfo();

	}

}
