package intermediate.array;

public class BookArrayTest {

	public static void main(String[] args) {
		Book[] library = new Book[5];
		
		library[0] = new Book("book1", "author1");
		library[1] = new Book("book2", "author2");
		library[2] = new Book("book3", "author3");
		library[3] = new Book("book4", "author4");
		library[4] = new Book("book5", "author5");
		
		for(int i=0; i<library.length; i++) {
			System.out.println(library[i]);
			
			library[i].showBookInfo();
		}

	}

}
