package intermediate.interfaceex;

public class Customer  implements Buy, Sell {

	@Override
	public void sell() {
		System.out.println("Customer sell");
	}

	@Override
	public void buy() {
		System.out.println("Customer buy");
	}
	
	@Override
	public void order() {
		Buy.super.order();
	}
	
}
