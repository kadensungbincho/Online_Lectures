package exception;

public class AutoCloseObj implements AutoCloseable {
	
	@Override
	public void close() throws Exception {
		System.out.println("auto close!!!");
	}
}
