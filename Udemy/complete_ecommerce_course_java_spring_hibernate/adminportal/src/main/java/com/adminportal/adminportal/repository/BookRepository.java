package com.adminportal.adminportal.repository;

import com.adminportal.adminportal.domain.Book;
import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<Book, Long> {
}
