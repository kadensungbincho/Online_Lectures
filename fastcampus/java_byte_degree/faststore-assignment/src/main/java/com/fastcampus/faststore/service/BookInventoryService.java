package com.fastcampus.faststore.service;

import com.fastcampus.faststore.entity.Book;
import com.fastcampus.faststore.entity.BookInventory;
import com.fastcampus.faststore.entity.BookSale;
import com.fastcampus.faststore.repository.BookInventoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BookInventoryService {
    private final BookInventoryRepository bookInventoryRepository;
    private final BookService bookService;
    private final BookSaleService bookSaleService;

    @Transactional
    public void storeBook(String title) {
        Book book = bookService.getOrThrow(title);
        BookSale bookSale = bookSaleService.getOrThrow(book);
        BookInventory inventory = getOrNew(book);
        inventory.addBook(bookSale);
        bookInventoryRepository.save(inventory);
    }

    @Transactional
    public void sellBook(String title) {
        Book book = bookService.getOrThrow(title);
        BookInventory inventory = getOrNew(book);

        BookSale bookSale = bookSaleService.getOrThrow(book);
        inventory.minusBook(bookSale);

        bookInventoryRepository.save(inventory);
    }

    @Transactional
    public BookInventory getOrNew(Book book) {
        return bookInventoryRepository.findByBook(book)
                .orElseGet(() -> BookInventory.empty(book));
    }
}
