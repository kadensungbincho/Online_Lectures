package com.bookstore.demo.service;

import com.bookstore.demo.domain.Book;

import java.util.List;
import java.util.Optional;

public interface BookService {
    List<Book> findAll();

    Optional<Book> findOne(Long id);
}
