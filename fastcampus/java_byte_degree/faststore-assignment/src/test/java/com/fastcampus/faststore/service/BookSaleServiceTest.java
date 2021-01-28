package com.fastcampus.faststore.service;

import com.fastcampus.faststore.entity.Book;
import com.fastcampus.faststore.entity.BookSale;
import com.fastcampus.faststore.entity.DiscountPolicy;
import com.fastcampus.faststore.repository.BookRepository;
import com.fastcampus.faststore.repository.BookSaleRepository;
import com.fastcampus.faststore.repository.DiscountPolicyRepository;
import com.fastcampus.faststore.type.DiscountType;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class BookSaleServiceTest {
    @Autowired
    private BookSaleRepository bookSaleRepository;

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private DiscountPolicyRepository discountPolicyRepository;

    private BookSaleService bookSaleService;

    private Book book;

    @BeforeEach
    public void setup() {
        BookService bookService = new BookService(bookRepository);
        DiscountPolicyService discountPolicyService = new DiscountPolicyService(discountPolicyRepository);
        bookSaleService = new BookSaleService(bookService, discountPolicyService, bookSaleRepository);
        setupABook();
    }

    private void setupABook() {
        book = new Book("자바의 정석", "남궁성", 30000L);
        bookRepository.save(book);
    }

    @AfterEach
    public void tearDown() {
        bookSaleRepository.deleteAll();
        bookRepository.deleteAll();
        discountPolicyRepository.deleteAll();
    }

    @Test
    @Transactional
    public void getOrThrow() {
        DiscountPolicy discountPolicy = new DiscountPolicy(DiscountType.PERCENT, 10L);
        discountPolicyRepository.save(discountPolicy);
        bookSaleRepository.save(new BookSale(book, discountPolicy));

        BookSale result = bookSaleService.getOrThrow(book);

        assertThat(result).isNotNull();
        assertThat(result.getBook().getTitle()).isEqualTo(book.getTitle());
        assertThat(result.getBook().getAuthor()).isEqualTo(book.getAuthor());
        assertThat(result.getBook().getPrice()).isEqualTo(book.getPrice());
        assertThat(result.getDiscountPolicy().getDiscountType()).isEqualTo(discountPolicy.getDiscountType());
        assertThat(result.getDiscountPolicy().getAmount()).isEqualTo(discountPolicy.getAmount());
    }

    @Test
    @Transactional
    public void registerBookSale() {
        bookSaleService.registerBookSale("자바의 정석", DiscountType.AMOUNT, 3000L);

        assertThat(bookSaleRepository.findByBook(book)).isNotNull();
    }
}
