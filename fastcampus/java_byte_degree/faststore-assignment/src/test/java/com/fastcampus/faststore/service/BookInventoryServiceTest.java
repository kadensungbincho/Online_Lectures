package com.fastcampus.faststore.service;

import com.fastcampus.faststore.entity.Book;
import com.fastcampus.faststore.entity.BookInventory;
import com.fastcampus.faststore.entity.BookSale;
import com.fastcampus.faststore.entity.DiscountPolicy;
import com.fastcampus.faststore.repository.BookInventoryRepository;
import com.fastcampus.faststore.repository.BookRepository;
import com.fastcampus.faststore.repository.BookSaleRepository;
import com.fastcampus.faststore.repository.DiscountPolicyRepository;
import com.fastcampus.faststore.type.DiscountType;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;

@SpringBootTest
public class BookInventoryServiceTest {

    @Autowired
    private BookInventoryRepository bookInventoryRepository;

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private BookSaleRepository bookSaleRepository;

    @Autowired
    private DiscountPolicyRepository discountPolicyRepository;

    private BookService bookService;

    private BookSaleService bookSaleService;

    private BookInventoryService bookInventoryService;

    private Book book;
    private DiscountPolicy discountPolicy;
    private BookSale bookSale;

    @BeforeEach
    public void setup() {
        bookService = new BookService(bookRepository);
        DiscountPolicyService discountPolicyService = new DiscountPolicyService(discountPolicyRepository);
        bookSaleService = new BookSaleService(bookService, discountPolicyService, bookSaleRepository);
        bookInventoryService = new BookInventoryService(bookInventoryRepository, bookService, bookSaleService);
        setupABook();
        setupADiscountPolicy();
        setupABookSale();
    }

    private void setupABook() {
        book = new Book("자바의 정석", "남궁성", 30000L);
        bookRepository.save(book);
    }

    private void setupADiscountPolicy() {
        discountPolicy = new DiscountPolicy(DiscountType.PERCENT, 10L);
        discountPolicyRepository.save(discountPolicy);
    }

    private void setupABookSale() {
        bookSale = new BookSale(book, discountPolicy);
        bookSaleRepository.save(bookSale);
    }

    @AfterEach
    public void tearDown() {
        bookInventoryRepository.deleteAll();
        bookRepository.deleteAll();
    }

    @Test
    @Transactional
    public void storeBook() {
        bookInventoryService.storeBook("자바의 정석");

        assertThat(bookInventoryRepository.count()).isEqualTo(1L);
        BookInventory result = bookInventoryRepository.findAll().get(0);
        assertThat(result.getBook().getTitle()).isEqualTo(book.getTitle());
        assertThat(result.getBook().getAuthor()).isEqualTo(book.getAuthor());
        assertThat(result.getBook().getPrice()).isEqualTo(book.getPrice());
        assertThat(result.getCount()).isEqualTo(1L);
        assertThat(result.getIncome()).isEqualTo(27000L);
    }

    @Test
    @Transactional
    public void sellBook() {
        bookInventoryRepository.save(new BookInventory(book, 1L, 27000L));
        bookInventoryService.sellBook("자바의 정석");

        assertThat(bookInventoryRepository.count()).isEqualTo(1L);
        BookInventory result = bookInventoryRepository.findAll().get(0);
        assertThat(result.getBook().getTitle()).isEqualTo(book.getTitle());
        assertThat(result.getBook().getAuthor()).isEqualTo(book.getAuthor());
        assertThat(result.getBook().getPrice()).isEqualTo(book.getPrice());
        assertThat(result.getCount()).isEqualTo(0L);
        assertThat(result.getIncome()).isEqualTo(0L);
    }
}
