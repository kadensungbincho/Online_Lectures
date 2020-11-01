package intermediate.template;

public class ManualCar extends Car {
	
	@Override
	public void drive() {
		System.out.println("This is a manual car");
		
	}

	@Override
	public void stop() {
		System.out.println("Stop manual Car");
		
	}

}
