package intermediate.array;

public class ObjectCopy {

	public static void main(String[] args) {
		
		Book[] library = new Book[5];
		Book[] copiedLibrary = new Book[5];
		
		library[0] = new Book("book1", "author1");
		library[1] = new Book("book2", "author2");
		library[2] = new Book("book3", "author3");
		library[3] = new Book("book4", "author4");
		library[4] = new Book("book5", "author5");
		
		System.arraycopy(library, 0, copiedLibrary, 0, 5);
		
		library[1] = new Book("new book", "new author");
		
		
		for (Book book: copiedLibrary) {
			book.showBookInfo();
		}
		
		library[0].setTitle("set new title");
		library[0].setAuthor("set new author");
		System.out.println();
		
		for (Book book: copiedLibrary) {
			book.showBookInfo();
		}
		

	}

}
