package com.fastcampus.faststore.service;

import com.fastcampus.faststore.entity.Book;
import com.fastcampus.faststore.repository.BookRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.catchThrowable;


@SpringBootTest
public class BookServiceTest {

    @Autowired
    private BookRepository bookRepository;

    private BookService bookService;

    @BeforeEach
    public void setup() {
        bookService = new BookService(bookRepository);
    }

    @AfterEach
    public void tearDown() {
        bookRepository.deleteAll();
    }

    @Test
    public void getOrThrow_WhenNoBookFound() {
        final Throwable raisedException = catchThrowable(() -> bookService.getOrThrow("없는책이름"));

        assertThat(raisedException).isInstanceOf(RuntimeException.class);
    }

    @Test
    public void getOrThrow_WhenBookFound() {
        bookService.registerBook("자바의 정석", "남궁성", 3000L);

        Book book = bookService.getOrThrow("자바의 정석");
        assertThat(book.getTitle()).isEqualTo("자바의 정석");
        assertThat(book.getAuthor()).isEqualTo("남궁성");
        assertThat(book.getPrice()).isEqualTo(3000L);
    }

    @Test
    public void registerBook() {
        bookService.registerBook("자바의 정석", "남궁성", 3000L);

        assertThat(bookRepository.findByTitle("자바의 정석")).isNotNull();
    }
}
