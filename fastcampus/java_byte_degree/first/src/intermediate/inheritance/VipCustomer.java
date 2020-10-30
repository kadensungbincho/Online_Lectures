package intermediate.inheritance;

public class VipCustomer extends Customer {
	
	double salesRatio;
	private int agentId;
	
	public VipCustomer() {
		customerGrade = "VIP";
		bonusRatio = 0.05;
		salesRatio = 0.1;
	}
	
	
}
