package com.adminportal.adminportal.service;

import com.adminportal.adminportal.domain.Book;

import java.util.List;

public interface BookService {

    Book save(Book book);

    List<Book> findAll();
}
