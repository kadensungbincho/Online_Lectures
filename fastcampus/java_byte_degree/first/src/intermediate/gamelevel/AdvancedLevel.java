package intermediate.gamelevel;

public class AdvancedLevel extends PlayerLevel {

	@Override
	public void showLevelMessage() {
		System.out.println("This is AdvancedLevel");
		
	}

	@Override
	public void run() {
		System.out.println("The advanced can run");
		
	}

	@Override
	public void jump() {
		System.out.println("The advanced can jump");
		
	}

	@Override
	public void turn() {
		System.out.println("The advanced cannot turn");
		
	}

}
