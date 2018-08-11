package org.opentutorials.javatutorials.exception;
import java.io.IOException;
class E {
	void throwArithmeticException() {
		throw new ArithmeticException();
	}
	void throwIOException() {
		try {
			throw new IOException();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	void throwIOException1() throws IOException {
		throw new IOException();
	}

}
