package intermediate.scheduler;

public class LeastJob implements Scheduler {

	@Override
	public void getNextCall() {
		System.out.println("get a next call with least job algorithm from the queue");
		
	}

	@Override
	public void sentCallToAgent() {
		System.out.println("Sent a call to agent");
		
	}
	
}
