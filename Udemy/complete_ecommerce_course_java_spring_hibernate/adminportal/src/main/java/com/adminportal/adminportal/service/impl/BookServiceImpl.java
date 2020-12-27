package com.adminportal.adminportal.service.impl;

import com.adminportal.adminportal.domain.Book;
import com.adminportal.adminportal.repository.BookRepository;
import com.adminportal.adminportal.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepository;

    public Book save(Book book) {
        return bookRepository.save(book);
    }

    public List<Book> findAll() {
        return (List<Book>) bookRepository.findAll();
    }
}
