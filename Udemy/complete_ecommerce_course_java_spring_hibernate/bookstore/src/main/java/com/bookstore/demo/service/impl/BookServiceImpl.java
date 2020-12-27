package com.bookstore.demo.service.impl;

import com.bookstore.demo.domain.Book;
import com.bookstore.demo.repository.BookRepository;
import com.bookstore.demo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepository;

    public List<Book> findAll() {
        return (List<Book>) bookRepository.findAll();
    }

    @Override
    public Optional<Book> findOne(Long id) {
        return bookRepository.findById(id);


    }
}
