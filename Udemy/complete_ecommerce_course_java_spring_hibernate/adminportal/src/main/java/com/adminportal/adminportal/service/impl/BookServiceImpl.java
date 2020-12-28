package com.adminportal.adminportal.service.impl;

import com.adminportal.adminportal.domain.Book;
import com.adminportal.adminportal.repository.BookRepository;
import com.adminportal.adminportal.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

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

    public Optional<Book> findOne(Long id) {
        return bookRepository.findById(id);
    }
}
