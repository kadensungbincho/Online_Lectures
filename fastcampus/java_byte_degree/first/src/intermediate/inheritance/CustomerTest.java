package intermediate.inheritance;

public class CustomerTest {

	public static void main(String[] args) {
		Customer customerLee = new Customer();
		customerLee.setCustomerName("Lee");
		customerLee.setCustomerId(1);
		customerLee.bonusPoint = 1000;
		System.out.println(customerLee.showCustomerInfo());
		
	}

}
