package intermediate.object;

class Book implements Cloneable {
	String title;
	String author;
	
	public Book(String title, String author) {
		this.title = title;
		this.author = author;
	}
	
	@Override
	public String toString() {
		return title + " " + author;
	}
	
	@Override
	protected Object clone() throws CloneNotSupportedException {
		return super.clone();
	}
}

public class ToStringTest {
	
	public static void main(String[] args) throws CloneNotSupportedException {
		Book book = new Book("name", "author");
		
		System.out.println(book);
		
		String str = new String("name");
		System.out.println(str);
		
		Book book2 = (Book)book.clone();
		System.out.println(book2);
	}
}
