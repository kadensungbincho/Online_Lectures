package intermediate.abstractclass;

public abstract class Computer {
	
	public abstract void display();
	public abstract void typing();
	
	public void turnOn() {
		System.out.println("Turning On");
	}
	
	public void turnOff() {
		System.out.println("Turning Off");
	}
} 
