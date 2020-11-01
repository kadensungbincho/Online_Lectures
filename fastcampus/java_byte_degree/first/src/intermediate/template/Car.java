package intermediate.template;

public abstract class Car {
	
	public abstract void drive();
	public abstract void stop();
	
	public void startCar() {
		System.out.println("Turning on");
	}
	
	public void turnOff() {
		System.out.println("Turning off");
	}
	
	final public void run() {
		startCar();
		drive();
		stop();
		turnOff();
	}
}
