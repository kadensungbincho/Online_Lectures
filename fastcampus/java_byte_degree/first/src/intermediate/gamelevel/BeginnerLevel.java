package intermediate.gamelevel;

public class BeginnerLevel  extends PlayerLevel {

	@Override
	public void showLevelMessage() {
		System.out.println("This is BeginnerLevel");
	}

	@Override
	public void run() {
		System.out.println("Beginner can run");
		
	}

	@Override
	public void jump() {
		System.out.println("Beginner cannot jump");
		
	}

	@Override
	public void turn() {
		System.out.println("Beginner cannot turn");
		
	}

}
