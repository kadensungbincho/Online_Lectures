package intermediate.gamelevel;

public class SuperLevel extends PlayerLevel {

	@Override
	public void showLevelMessage() {
		System.out.println("This is SuperLevel");
		
	}

	@Override
	public void run() {
		System.out.println("The super can run");
		
	}

	@Override
	public void jump() {
		System.out.println("The super can jump");
		
	}

	@Override
	public void turn() {
		System.out.println("The super can turn");
		
	}
	
}
