package intermediate.scheduler;

public class PriorityAllocation implements Scheduler {

	@Override
	public void getNextCall() {
		System.out.println("Get a next call by priority");
		
	}

	@Override
	public void sentCallToAgent() {
		System.out.println("Sent a call to agent");
		
	}

}
