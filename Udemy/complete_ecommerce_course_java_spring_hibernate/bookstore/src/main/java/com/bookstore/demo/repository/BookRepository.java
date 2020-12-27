package com.bookstore.demo.repository;

import com.bookstore.demo.domain.Book;
import org.springframework.data.repository.CrudRepository;


public interface BookRepository extends CrudRepository<Book, Long> {
}
