package intermediate.scheduler;

public class RoundRobin implements Scheduler {

	@Override
	public void getNextCall() {
		System.out.println("Get a next call sequentially from the queue");
		
	}

	@Override
	public void sentCallToAgent() {
		System.out.println("Sent a call to agent");
	}
	
}
