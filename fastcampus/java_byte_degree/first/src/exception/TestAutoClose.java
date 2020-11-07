package exception;

public class TestAutoClose {

	public static void main(String[] args) {
		
		try(AutoCloseObj obj = new AutoCloseObj()){
			
		} catch (Exception e){
			
		}
	}

}
