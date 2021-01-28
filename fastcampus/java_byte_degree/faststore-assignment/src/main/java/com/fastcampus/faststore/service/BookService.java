package com.fastcampus.faststore.service;

import com.fastcampus.faststore.entity.Book;
import com.fastcampus.faststore.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BookService {
    private final BookRepository bookRepository;

    @Transactional(readOnly = true)
    public Book getOrThrow(String title) {
        return bookRepository.findByTitle(title)
                .orElseThrow(() -> new RuntimeException("해당 제목의 책이 존재하지 않습니다."));
    }

    @Transactional
    public void registerBook(String title, String author, Long price) {
        if (bookRepository.findByTitle(title).isPresent()) {
            throw new RuntimeException("Book with the title (" + title + ") already exists");
        }

        Book book = Book.builder()
                .title(title)
                .author(author)
                .price(price)
                .build()
                ;
        bookRepository.save(book);
    }
}
